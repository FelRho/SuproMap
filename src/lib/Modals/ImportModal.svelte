<script>
  // @ts-nocheck
  import { createEventDispatcher } from "svelte";
  import FileDialogcomponent from "../fileInputs/fileDialogcomponent.svelte";
  import DragAndDropComponent from "../fileInputs/dragAndDropComponent.svelte";

  const dispatcher = createEventDispatcher();

  let isInputUsed = true;
  let dropData = undefined;
  let inputData = undefined;

  function applyClick(data) {
    if (data === undefined) {
      return;
    }

      dispatcher("imported", data);
  }

  function inputUpload(e){
    inputData = e.detail;
  }

  function dropUpload(e){
    dropData = e.detail;
  }


</script>

<div
  class="modal fade modal-xl"
  id="importModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title headline" id="exampleModalLabel">
          Orte Importieren
        </h3>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <div class="d-flex flex-row justify-content-evenly mb-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="inputRadio"
              id="inputRadio"
              bind:group={isInputUsed}
              value={true}
            />
            <label class="form-check-label headline" for="inputRadio">
              <b>Datei Dialog</b>
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="dropRadio"
              id="dropRadio"
              bind:group={isInputUsed}
              value={false}
            />
            <label class="form-check-label headline" for="dropRadio">
              <b>Drag And Drop</b>
            </label>
          </div>
        </div>

        <hr />

        <div class="d-flex flex-row">
          <div class="d-flex flex-column justify-content-start flex-fill">
            <h5>Datei Dialog</h5>
            <FileDialogcomponent enabled={isInputUsed} on:uploaded={inputUpload}/>
          </div>

          <div class="mx-2 vertical_line" />
          <div class="">
            <h5>Drop Zone</h5>

            <DragAndDropComponent enabled={!isInputUsed} on:uploaded={dropUpload}/>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <p class="text-danger me-3">
          Achtung! Wenn Daten importiert werden, gehen die aktuellen Daten
          Verloren.
        </p>
        {#if (dropData === undefined && !isInputUsed) || (inputData === undefined && isInputUsed)}
          <button
            type="button"
            class="btn btn-success"
            data-bs-dismiss="modal"
            disabled>Anwenden</button
          >
        {:else}
          <button
            type="button"
            class="btn btn-success"
            data-bs-dismiss="modal"
            on:click={() => {
              if (isInputUsed) {
                applyClick(inputData);
              } else {
                applyClick(dropData);
              }
            }}>Anwenden</button
          >
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .vertical_line {
    border: 2px solid var(--color-primary);
  }
</style>
