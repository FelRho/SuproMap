<script>
    import Icon from "@iconify/svelte";
    import { locationTypes } from "./scripts/enums";
    import { getIconColor, getIconName } from "./scripts/IconLib";
    import { createEventDispatcher } from "svelte";

    const dispatcher = createEventDispatcher();

    function filterClick(type)
    {
        dispatcher("filterAdded", type);
    }

</script>

<div class="d-flex flex-row">
    {#each Object.keys(locationTypes) as type}
    <button class="btn btn-outline-secondary" on:click={() => filterClick(type)}>
        <Icon icon={getIconName(type)} color={getIconColor(type)}  width=20/>
        {type}
    </button>
    {/each}
</div>
