<script>
    import { createEventDispatcher } from "svelte";
    import { getIconColor, getIconName } from "./scripts/IconLib.js";
    import Icon from "@iconify/svelte";
    import IconedText from "./IconedText.svelte";

    export let location;
    export let editMode;
    export let selected;

    let dispatcher = createEventDispatcher();

    function editClick() {
        dispatcher("editLocation", location);
    }

    function deleteClick() {
        dispatcher("deleteLocation", location);
    }

    function viewOnMapClick(e)
    {
        dispatcher("viewOnMap", location);
    }

</script>

<div class="card {selected? "is_selected" : ""} mb-3" id={location.display_name}>
    <div class="card-header">
        <div class="d-flex flex-row justify-content-between">
            <div class="d-flex flex-row">
                <div class="me-2">
                    <Icon
                        icon={getIconName(location.locationType)}
                        width="20"
                        color={getIconColor(location.locationType)}
                    />
                </div>
                <p class="fs-5 m-0">{location.title}</p>
            </div>

            {#if editMode}
                <div>
                    <button class="btn btn-primary shake1" data-bs-toggle="modal" data-bs-target="#editModal" on:click={editClick}>
                        <Icon icon="mdi:pencil" width="25" />
                    </button>
                    <button class="btn btn-danger shake2" on:click={deleteClick}>
                        <Icon icon="mdi:trash" width="25" />
                    </button>
                </div>
                {:else}
                <button class="btn btn-primary h-100" on:click={viewOnMapClick}>
                    <Icon icon="uiw:map" width=20/>
                </button>

            {/if}
        </div>
    </div>
    <div class="card-body">

        <div class="mb-2">

            <IconedText icon="ph:address-book" >
                <p>{location.address}</p>
            </IconedText>
        </div>
        <div class="mb-2">
            <IconedText icon={getIconName(location.locationType)} color={getIconColor(location.locationType)}>
                <p>{location.locationType}</p>
            </IconedText>
        </div>

        <div class="d-flex flex-row justify-content-between mb-2">
            <div>

                <IconedText icon="mdi:latitude">
                <p>{location.pos[0]}</p></IconedText>
            </div>
            <div>
                <IconedText icon="mdi:longitude">
                    <p>{location.pos[1]}</p>
                </IconedText>
            </div>
        </div>

        <div class="mb-2">
            <IconedText icon="fluent:notepad-12-regular">
                <pre class="text-wrap">{location.note ||"-"}</pre>
            </IconedText>
        </div>

    </div>
</div>


<style>
    .is_selected{
        box-shadow: 0px 0px 20px var(--color-primary);
    }    
</style>