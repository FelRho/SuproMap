<script>
    import Icon from "@iconify/svelte";
    import { locationTypes } from "./scripts/enums";
    import { getIconColor, getIconName } from "./scripts/IconLib";


    export let activefilters;


    let allFilters =  Object.keys(locationTypes);
    allFilters.push(undefined);


    function setOn(type)
    {
        activefilters = [...activefilters, type];
    }

    function setOff(type){
        activefilters = activefilters.filter(x => x !== type);
    }

</script>

<div class="d-flex flex-row filter_list">
    {#each allFilters as type}
    {#if activefilters.includes(type)}
    <button class="btn btn-light me-3" on:click={() => setOff(type)}>
        <Icon icon={getIconName(type)} color={getIconColor(type)}  width=16/>
        {type}
    </button>
    {:else}
    <button class="btn btn-outline-secondary me-3" on:click={() => setOn(type)}>
        <Icon icon={getIconName(type)} color={getIconColor(type)}  width=16/>
        {type}
    </button>
    {/if}

    {/each}
</div>


<style>


    .filter_list{
        max-width: 50vw;
        overflow: auto;
    }


</style>
