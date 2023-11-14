<script>
    import { createEventDispatcher } from "svelte";
    import { storageManager } from "../scripts/storage";

    export let enabled = false;

    let errorMessage = "";
    let filename = "";
    let dispatcher = createEventDispatcher();

    function onDragOver(e) {
        e.preventDefault();
    }

    function onDrop(e) {
        e.preventDefault();

        let dataTransferObject;

        if (e.dataTransfer.items) {
            dataTransferObject = e.dataTransfer.items;
        } else {
            dataTransferObject = e.dataTransfer.files;
        }

        if (dataTransferObject.length !== 1) {
            errorMessage = "Es darf immer nur eine Datei ausgewählt werden.";
            return;
        }

        const file = dataTransferObject[0].getAsFile();
        filename = file.name;

        errorMessage = "";
        reader.readAsDataURL(file);
    }

    let reader = new FileReader();
    reader.onload = function (event) {
        fetch(event.target.result.toString()).then((result) =>
            result.json().then((data) => {

                if (!storageManager.dataHasCorrectFormat(data)) {
                    errorMessage =
                        "Daten sind nicht in korrektem Format, bitte stellen Sie sicher, das es sich um eine SuproMap Datei handelt.";
                    return;
                }

                dispatcher("uploaded", data);
            })
        );
    };
</script>

<div class="card drop_zone {enabled ? 'glow' : ''}">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="card-body"
        aria-grabbed="true"
        on:dragover={onDragOver}
        on:drop={onDrop}
    >
        {#if filename}
            <p class="headline"><b>Dateiname:</b> {filename}</p>
        {/if}
    </div>
</div>
<p class="text-danger">{errorMessage}</p>

<style>
    .drop_zone {
        width: 30vw;
        height: 20vh;
    }
</style>
