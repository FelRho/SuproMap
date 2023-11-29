<script>
    import { locationTypes } from "./scripts/enums.js";
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

                {type} ({locations.filter((x) => x.locationType === type)
                    .length})
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
                {type} ({locations.filter((x) => x.locationType === type).length})
            </button>
        {/if}
    {/each}
</div>

<style>
    .filter_list {
        max-width: 50vw;
        overflow: visible;
    }
</style>
