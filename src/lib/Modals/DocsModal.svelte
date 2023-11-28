<script>
    let docs = "";

    fetch(
        "https://raw.githubusercontent.com/FelRho/SuproMap/main/README.md",
    ).then((content) => {
        content.text().then((text) => {
            docs = text;
        });
    });
</script>

<div
    class="modal fade"
    id="docModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                </h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                {#if docs}
                <div id="markdownText">
                    {@html docs}
                </div>
                {:else}
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                {/if}
            </div>
            <div class="modal-footer">
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

#markdownText :global(h1) {
    margin-bottom: 3%;
}
#markdownText :global(h2) {
    margin-bottom: 3%;
}
#markdownText :global(h3) {
    margin-bottom: 3%;
}
#markdownText :global(h4) {
    margin-bottom: 3%;
}
#markdownText :global(h5) {
    margin-bottom: 3%;
}
#markdownText :global(h6) {
    margin-bottom: 3%;
}
#markdownText :global(p) {
    margin-bottom: 3%;
}
#markdownText :global(img) {
    margin-bottom: 3%;
}

</style>