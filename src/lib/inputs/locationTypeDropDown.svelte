<script>
    import { locationTypes } from "../scripts/enums";

    export let selectedType;
</script>

<div class="input-group">
    <label
        class="input-group-text"
        for="typeInputGroup"
    >
        Typ
    </label>
    <select id="typeInputGroup"
        class="form-select"
        bind:value={selectedType}
    >
        {#each Object.keys(locationTypes) as prop}
            <option value={prop}>{prop}</option>
        {/each}
    </select>
</div>