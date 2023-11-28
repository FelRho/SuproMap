<script>
    let docs = "";

   fetch("https://raw.githubusercontent.com/FelRho/SuproMap/main/README.md").then((content) => {
        content.text().then((text) => {
            docs = text;
        })
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
                {@html docs}
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="modal" data-bs-target="#appInfoModal">Back</button
                >
            </div>
        </div>
    </div>
</div>
