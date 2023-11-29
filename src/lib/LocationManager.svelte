<script>
    import Icon from "@iconify/svelte";
    import LocationItem from "./LocationItem.svelte";
    import EditLocationModal from "./Modals/EditLocationModal.svelte";
    import { createEventDispatcher } from "svelte";
    import AddLocationModal from "./Modals/AddLocationModal.svelte";


    const dispatcher = createEventDispatcher();

    export let locations;
    export let selectedLocation;
    export let filters;

    let editMode = false;
    let editedLocation;

    function editClick() {
        editMode = true;
    }

    function doneClick() {
        editMode = false;
        dispatcher("changed", locations);
    }

    function removeLocation(e) {
        const data = e.detail;
        locations = locations.filter(
            (x) => x.display_name !== data.display_name
        );
    }

    function updateLocation(e) {
        const data = e.detail;
        editedLocation =  locations.filter(x => x.display_name === data.display_name)[0];
    }

    function saveChanges(e){
        const data = e.detail;

        let tmp = locations.find(x => x.display_name === data.display_name);


        if(tmp === undefined)
            return;

        tmp = data;

        locations = locations;
    }

    function showOnMap(e)
    {
        const data = e.detail;
        selectedLocation = data;
        dispatcher("showOnMap", data);
    }

</script>

<div class="card">
    <div class="card-header">
        <div class="d-flex flex-row justify-content-between">
            <h4 class="headline"><b>Besuchte Orte ({locations.filter(x => filters.includes(x.locationType)).length}/{locations.length})</b></h4>
            <div>
                {#if editMode}
                    <button class="btn btn-success shake3" on:click={doneClick}>
                        Speichern
                    </button>
                {:else}
                    <button
                        class="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        <Icon icon="ic:baseline-plus" width="22" />
                    </button>
                    <button class="btn btn-primary" on:click={editClick}>
                        <Icon icon="mdi:pencil" width="22" />
                    </button>
                {/if}
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="scrollArea">
            {#each locations.filter(x => filters.includes(x.locationType)) as location}
                {#key location.display_name}
                        <LocationItem
                            bind:location
                            selected={(selectedLocation !== undefined)? selectedLocation.display_name === location.display_name : false}
                            {editMode}
                            on:deleteLocation={removeLocation}
                            on:editLocation={updateLocation}
                            on:viewOnMap={showOnMap}
                        />
                {/key}
            {/each}
        </div>
    </div>
</div>
<EditLocationModal location={editedLocation} on:save={saveChanges}/>
<AddLocationModal on:done={doneClick} bind:locationList={locations} />


<style>
    .scrollArea {
        height: 73vh;
        overflow: auto;
        padding: 1%;
    }
</style>
