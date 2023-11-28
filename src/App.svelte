<script>
	import { locationTypes } from './lib/scripts/enums.js';
  import { onMount } from "svelte";
  import LocationManager from "./lib/LocationManager.svelte";
  import Map from "./lib/Map.svelte";
  import { storageManager } from "./lib/scripts/storage";
  import Navbar from "./lib/Navbar.svelte";
    import ScreenshotPreviewModal from './lib/Modals/ScreenshotPreviewModal.svelte';
    import Footer from './lib/Footer.svelte';

    const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );



  let locations = [];
  let filters = ["Home","Külf", "Kilf", undefined];
  let filterChangedTrigger = false;

  const suproLocation = {
    title: "Supro",
    address: "Garnmarkt 1",
    note: "This is a note.",
    locationType: locationTypes.Home,
    display_name: "supro",
    pos: ["47.33520231037373", "9.646302813235382"],
  };

  onMount(() => {
    locations = storageManager.readFromLocalstorage();

    if (!locations.some((x) => x.display_name === suproLocation.display_name)) {
      //locations = [...locations, suproLocation];
    }
  });

  let selectedLocation = undefined;
  let screenShotSrc = "";

  let mapAction;
  let setView;
  let getSceenshotPromise;

  function saveChanges() {
    storageManager.saveToLocalstorage(locations);
  }

  function showOnMap(e) {
    const data = e.detail;

    setView(data.pos[0], data.pos[1], 15);
  }

  function showInList(e) {
    const locationData = e.detail;

    window.location.href = `#${locationData.display_name}`;

    selectedLocation = locationData;
  }

  function onImported(e){
    const data = e.detail;

    locations = data;
    selectedLocation = undefined;
    saveChanges();
  }

  async function TakeScreenShotClick(){
    

    getSceenshotPromise().then((image) => {
      screenShotSrc = image;
    });
    }


$: if(filters){
  filterChangedTrigger = !filterChangedTrigger;
}
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"
  ></script>

  <script
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<ScreenshotPreviewModal bind:imageSource={screenShotSrc}/>
<main>
  <Navbar bind:activeFilters={filters} on:imported={onImported} on:screenShot={TakeScreenShotClick}/>
  <div class="container-fluid pt-3">
    <div class="d-flex flex-row">
      <div class="card me-3">
        <div class="card-body map">
          {#key JSON.stringify(locations) + filterChangedTrigger}
            <Map
              locations={locations.filter(x => filters.includes(x.locationType))}
              bind:addMarker={mapAction}
              bind:setFocus={setView}
              bind:getScreenshotPromise={getSceenshotPromise}
              on:showInList={showInList}
            />
          {/key}
        </div>
      </div>

      <div class="list">
        <LocationManager
          filters={filters}
          bind:locations={locations}
          bind:selectedLocation
          on:showOnMap={showOnMap}
          on:changed={saveChanges}
        />
      </div>
    </div>
  </div>
  <Footer/>
</main>

<style>
  .map {
    width: 60vw;
  }

  .list {
    width: 34vw;
  }
</style>
