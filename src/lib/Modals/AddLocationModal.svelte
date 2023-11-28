<script>
  import Icon from "@iconify/svelte";
  import LocationSugestion from "../LocationSugestion.svelte";
  import { createEventDispatcher } from "svelte";

  export let locationList = [];

  let searchText = "";

  let promise;
  const dispatcher = createEventDispatcher();

  function searchClick() {
    if (searchText.length === 0) {
      return;
    }

    promise = searchForLocation(searchText);
  }

  function addPin(e) {
    let data = e.detail.location;

    let newLocation = {
      title: `${data.name}`,
      address: `${data.address.road || ""} ${
        data.address.house_number || ""
      }, ${data.address.postcode} ${
        data.address.town || data.address.village || data.address.city
      }`,
      note: "",
      locationType: e.detail.category,
      display_name: data.display_name,
      pos: [data.lat, data.lon],
    };

    locationList = [...locationList, newLocation];
  }

  function removePin(e) {
    let data = e.detail;

    locationList = locationList.filter(
      (x) => x.display_name !== data.display_name
    );
  }

  function doneClick() {
    dispatcher("done");
  }

  async function searchForLocation(locationText) {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${locationText}&format=json&limit=20&addressdetails=1`
    );
    if (res.ok) {
      const result = res.json();
      return result;
    } else {
      throw new Error(await res.text());
    }
  }

  function onKeyDown(e){
    if(e.key === "Enter")
    {
      searchClick();
    }
  }
</script>

<div
  class="modal modal-xl fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title headline" id="exampleModalLabel">
          Ort Hinzufügen
        </h3>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <Icon icon="mdi:location" width="25" />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Name/Ort/Adresse"
            bind:value={searchText}
            on:keydown={onKeyDown}
          />
          <button class="btn btn-primary" type="button" on:click={searchClick}>
            <Icon icon="material-symbols:search" width="24" />
            Search
          </button>
        </div>

        <div class="locationList">
        {#await promise}
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        {:then response}
            {#if response === undefined}
                <div class="card">
                  <div class="card-body text-center">
                    <p class="mt-2 text-warning"><b>Bitte geben Sie ein Ziel ein</b></p>
                  </div>
                </div>
            {:else}
              {#each response as location}
                <div class="mb-3">
                  <LocationSugestion
                    bind:locationObject={location}
                    selected={locationList.some(
                      (x) => x.display_name === location.display_name
                    )}
                    on:addPin={addPin}
                    on:removePin={removePin}
                  />
                </div>
              {/each}
            {/if}
            {:catch error}
            <p class="text-danger">{error}</p>
            {/await}
          </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-success"
          data-bs-dismiss="modal"
          on:click={doneClick}>Speichern</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .locationList {
    height: 60vh;
    overflow: auto;
  }

</style>
