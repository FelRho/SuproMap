<script>
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import ImportModal from "./Modals/ImportModal.svelte";
  import { exportSavedData } from "./scripts/FileExporter";
  import Icon from "@iconify/svelte";
  import FilterList from "./FilterList.svelte";

  export let activeFilters;

  const dispatcher = createEventDispatcher();

  function exportClick() {
    exportSavedData();
  }

  function screenShotClick() {
    dispatcher("screenShot");
  }
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js"
  >
  </script>
</svelte:head>


<nav class="navbar nav_b_bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="#supro">
      <div class="d-flex flex-row">
        <img
          src="SuproMapIcon.png"
          alt="Logo"
          width="70"
          class="d-inline-block align-text-top"
        />

        <div class="d-flex flex-column justify-content-center">
          <h2 class="text-light ms-2">
            <b>SuproMap</b>
          </h2>
        </div>
      </div>
    </a>
    <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#screenshotModal" on:click={screenShotClick}>
      <Icon icon="mdi:camera" width="30" />
      Screenshot
    </button>
    <div>
      <FilterList bind:activefilters={activeFilters} />
    </div>

    <div>
      <button class="btn btn-outline-light" on:click={exportClick}>
        <Icon icon="uil:export" width="25"/>
        Export
      </button>

      <button
        class="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#importModal"
      >
      <Icon icon="uil:import" width="25"/>
        Import
      </button>
    </div>
  </div>
</nav>

<ImportModal on:imported/>

<style>
  .nav_b_bottom {
    border-bottom: 1px solid black;
    background-color: var(--color-tertiary);
  }
</style>
