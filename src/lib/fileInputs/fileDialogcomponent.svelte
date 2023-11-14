<script>
// @ts-nocheck

    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from "svelte";
    import { storageManager } from "../scripts/storage";

    export let enabled = false;

    let dispatcher = createEventDispatcher();
    let fileArray = [];
    let errorMessage = "";

    $: if (fileArray) {
    if (fileArray.length === 1) {
        const file = fileArray[0];

        errorMessage = "";
      reader.readAsDataURL(file);
    }
  }

  let reader = new FileReader();
  reader.onload = function (event) {
    fetch(event.target.result.toString()).then((result) =>
      result.json().then((data) => {
        
        if(!storageManager.dataHasCorrectFormat(data))
        {
          errorMessage = "Daten sind nicht in korrektem Format, bitte stellen Sie sicher, das es sich um eine SuproMap Datei handelt.";
          return;
        }


        dispatcher("uploaded", data);
      })
    );
  }

</script>

<div class="input-group {enabled ? 'glow' : ''}">
    <label class="input-group-text" for="inputGroupFile01">
        <Icon icon="mdi:file-outline" width="20" />
    </label>
    <input
        type="file"
        class="form-control"
        id="inputGroupFile01"
        bind:files={fileArray}
        accept=".json"
    />
</div>
<p class="text-danger">{errorMessage}</p>
