<script>
	import { locationTypes } from './scripts/enums.js';
    import Icon from "@iconify/svelte";
    import { getIconColor, getIconName } from "./scripts/IconLib";

    export let activefilters;
    export let locations;

    let allFilters = Object.keys(locationTypes);
    allFilters.push(undefined);

    function setOn(type) {
        activefilters = [...activefilters, type];
    }

    function setOff(type) {
        activefilters = activefilters.filter((x) => x !== type);
    }
</script>

<div class="d-flex flex-row filter_list">
    {#each allFilters as type}
        {#if activefilters.includes(type)}
            <button class="btn btn-light me-3" on:click={() => setOff(type)}>
                <Icon
                    icon={getIconName(type)}
                    color={getIconColor(type)}
                    width="16"
                />
                {type}
                <span class="position-absolute translate-middle badge rounded-pill bg-danger filter_count_position">
                    {locations.filter(x => x.locationType === type).length}
                    <span class="visually-hidden">unread messages</span>
                  </span>
            </button>
        {:else}
            <button
                class="btn btn-outline-secondary me-3"
                on:click={() => setOn(type)}
            >
                <Icon
                    icon={getIconName(type)}
                    color={getIconColor(type)}
                    width="16"
                />
                {type}
                <span class="position-absolute translate-middle badge rounded-pill bg-danger filter_count_position">
                    {locations.filter(x => x.locationType === type).length}
                    <span class="visually-hidden">unread messages</span>
                  </span>
            </button>
        {/if}
    {/each}
</div>

<style>
    .filter_list {
        max-width: 50vw;
        overflow: auto;
    }

    .filter_count_position{
        top: 2vh !important;
    }


</style>
