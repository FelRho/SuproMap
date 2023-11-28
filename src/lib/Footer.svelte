<script>
    import Icon from "@iconify/svelte";
    import AppInfoModal from "./Modals/AppInfoModal.svelte";
    import DocsModal from "./Modals/DocsModal.svelte";

</script>
<footer class="mt-5 px-5 py-3">
    <div>
        <div class="d-flex flex-row justify-content-between footer_content">
            <div class="d-flex flex-row">
                <img
                src="SuproMapIcon.png"
                alt="Logo"
                width="70"
                class="d-inline-block align-text-top"
                data-bs-toggle="modal"
                data-bs-target="#appInfoModal"
                />
                <div class="d-flex flex-column justify-content-center">
                    <h4 class="headline text-center"><b>SuproMap</b></h4>
                </div>
            </div>
            <p class="text-light">This is a centered text</p>
            <div>
                <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#appInfoModal">
                    <Icon icon="material-symbols:info" width=30/>
                    Info
                </button>
                <button class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#docModal">
                    <Icon icon="streamline:manual-book" width=30/>
                    Docs
                </button>
            </div>
        </div>
    </div>



</footer>
<AppInfoModal/>
<DocsModal/>


<style>
    footer{
        background-color: black;
        border-top: 10px solid var(--color-tertiary);
    }

    .footer_content{
        width: 90vw;
    }

</style>