<script>
    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from "svelte";

    export let locationObject;
    export let selected = false;

    const dispatcher = createEventDispatcher();


    function addClick()
    {
        dispatcher("addPin", locationObject);
    }


    function removeClick()
    {
        dispatcher("removePin", locationObject);
    }
</script>

<div class="card">
    <div
        id={locationObject.name}
        class="card-body d-flex flex-row justify-content-between"
    >
        <p class="name-width">{locationObject.name}</p>

        <div class="d-flex flex-column">
            <p>
                {locationObject.address.road || "Straße Unbekannt"}
                {locationObject.address.house_number || ""}
            </p>
            <p>
                {locationObject.address.postcode}
                {locationObject.address.town || locationObject.address.village || locationObject.address.city }
            </p>
            <p>
                {locationObject.address.country}, {locationObject.address
                    .state}. {locationObject.address.region || "-"}
            </p>
        </div>

        <p>{locationObject.class}</p>
        {#if selected}
        <button class="btn btn-secondary" type="button" on:click={removeClick}>
            <Icon icon="iconoir:map-pin-plus" width="25" />
        </button>
        {:else}
        <button class="btn btn-primary" type="button" on:click={addClick}>
            <Icon icon="iconoir:map-pin-plus" width="25" />
        </button>
        {/if}

    </div>
</div>

<style>
    .name-width {
        max-width: 25%;
    }
</style>
