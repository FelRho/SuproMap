<script>
    import Icon from "@iconify/svelte";
    import { locationTypes } from "../scripts/enums";
    import { createEventDispatcher } from "svelte";
    import { icon } from "leaflet";

    export let location;

    const dispatcher = createEventDispatcher();


    function saveClick()
    {
        dispatcher("save", location);
    }

</script>

<div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title headline" id="exampleModalLabel">
                    Edit Location
                </h3>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                {#if location === undefined}
                    <p>Please select a location to edit</p>
                {:else}
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <Icon icon="material-symbols:title" width="20" />
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Title"
                            aria-label="Title"
                            bind:value={location.title}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <Icon icon="ph:address-book" width="20" />
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Title"
                            aria-label="Title"
                            bind:value={location.address}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <label
                            class="input-group-text"
                            for="typeInputGroup"
                        >
                            Typ
                        </label>
                        <select id="typeInputGroup"
                            class="form-select"
                            bind:value={location.locationType}
                        >
                            {#each Object.keys(locationTypes) as prop}
                                <option value={prop}>{prop}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Notiz</span>
                        <textarea
                            class="form-control"
                            aria-label="With textarea"
                            bind:value={location.note}
                        />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <Icon icon="mdi:latitude" width="20" />
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Title"
                            aria-label="Title"
                            bind:value={location.pos[0]}
                        />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text">
                            <Icon icon="mdi:longitude" width="20" />
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Title"
                            aria-label="Title"
                            bind:value={location.pos[1]}
                        />
                    </div>
                {/if}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" on:click={saveClick}
                    >OK</button
                >
            </div>
        </div>
    </div>
</div>
