<script>
    import { createEventDispatcher } from "svelte";
    import ImportModal from "./Modals/ImportModal.svelte";
import { exportData } from "./scripts/ExportImport";


  function exportClick()
  {
    exportData();
  }
</script>

<nav class="navbar nav_b_bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#supro">

        <div class="d-flex flex-row">
          <img src="SuproMapIcon.png" alt="Logo" width="70" class="d-inline-block align-text-top">

          <div class="d-flex flex-column justify-content-center">           
            <h2 class="text-light ms-2">
              <b>SuproMap</b>
            </h2>
          </div>
        </div>
      </a>

      <div>

        <button class="btn btn-outline-light" on:click={exportClick}>
          Export
        </button>
        
        <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#importModal">
          Import
        </button>
      </div>


    </div>
  </nav>

  <ImportModal on:imported/>

  <style>
    .nav_b_bottom{
      border-bottom: 1px solid black;
      background-color: var(--color-tertiary);
    }
  </style>