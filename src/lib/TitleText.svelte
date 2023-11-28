<script>

    export let title;
    export let width = 15;
</script>

<div class="d-flex flex-row">
    <div class="vr_e pe-2 me-2" style={`width: ${width}%`}>
       <h6><b>{title}</b></h6>
    </div>

    <slot />
</div>

<style>
    .vr_e {
        border-right: 2px solid var(--color-primary);
    }
</style>
