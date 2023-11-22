<script>
    import Icon from "@iconify/svelte";
    import GroupBox from "../GroupBox.svelte";
    import TitleText from "../TitleText.svelte";
</script>

<div
    class="modal fade"
    id="appInfoModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title headline" id="exampleModalLabel">
                    App Infos
                </h3>
                <button class="ms-5 btn btn-outline-danger">
                    <Icon icon="mdi:nuclear" width=30/>
                </button>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                <GroupBox title="Projekt">
                    <TitleText title="Konzept">
                        <p>Konzept erklärt</p>
                    </TitleText>
                    <TitleText title="Featrues">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item mb-3">
                                And a fifth one
                            </li>
                        </ul>
                    </TitleText>
                    <TitleText title="Version">
                        <p>1.1.0</p>
                    </TitleText>
                    <TitleText title="Last Update">
                        <p>22.11.2023</p>
                    </TitleText>
                </GroupBox>

                <div class="mb-3" />

                <GroupBox title="Entwickler">
                    <TitleText title="Name">
                        <p>Felix Rhomberg</p>
                    </TitleText>
                    <TitleText title="Interner Kontakt">
                        <p>felix.rhomberg@mariaebene.at</p>
                    </TitleText>
                    <TitleText title="Externer Kontakt">
                        <p>rhomberg.felix03@gmail.com</p>
                    </TitleText>
                </GroupBox>

                <div class="mb-3" />
                <GroupBox title="Code Basis">
                    <TitleText title="Source Code">
                        <a href="https://github.com/FelRho/SuproMap">
                            Github
                        </a>
                    </TitleText>
                </GroupBox>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal">Close</button
                >
            </div>
        </div>
    </div>
</div>
