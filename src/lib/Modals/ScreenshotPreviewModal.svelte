<script>
    import Icon from "@iconify/svelte";
    import { downloadFile } from "../scripts/FileExporter";

    export let imageSource;

    function downloadButtonClick() {
        if(!imageSource)
        {
            return;
        }

        downloadFile(imageSource, "SuproMapImage", "png");
    }
</script>

<div
    class="modal fade"
    id="screenshotModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title headline" id="exampleModalLabel">
                    Screenshot Speichern
                  </h3>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                <div class="d-flex flex-row justify-content-center">
                {#if imageSource}
                <img
                src={imageSource}
                alt="screenshot of map"
                class="rounded"
            />
                {:else}
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                {/if}



                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-success" on:click={downloadButtonClick}>
                    <Icon icon="material-symbols:download" width="25" />
                    Download
                </button>
                <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal">Close</button
                >
            </div>
        </div>
    </div>
</div>

<style>
    img {
        border: 5px groove var(--color-primary);
    }
</style>
