<script>
    import { locationTypes } from "./scripts/enums.js";
    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from "svelte";
    import { getIconColor, getIconName } from "./scripts/IconLib";
    import IconedText from "./IconedText.svelte";

    export let locationData;

    const dispatcher = createEventDispatcher();

    function showInListClick() {
        dispatcher("showInList", locationData);
    }
</script>

<div class="marker_popup">
    <div class="d-flex flex-row">
        <Icon
            class="me-2"
            icon={getIconName(locationData.locationType)}
            width="35"
            color={getIconColor(locationData.locationType)}
        />
        <h3 class="">{locationData.title}</h3>
    </div>

    <hr />

    <div>
        <IconedText icon="ph:address-book">
            <h6>{locationData.address}</h6>
        </IconedText>
    </div>

    <button
        class="btn btn-outline-secondary w-100 mt-4"
        on:click={showInListClick}
    >
        In der Liste Anzeigen
    </button>
</div>

<style>
    .marker_popup {
        min-width: 16vw;
    }
</style>
