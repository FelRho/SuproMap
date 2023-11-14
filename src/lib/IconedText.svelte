<script>
    import Icon from "@iconify/svelte";

    export let icon;
    export let size = 20;
    export let color = "grey";
</script>

<div class="d-flex flex-row">
    <div class="vr_e pe-2 me-2">
        <Icon {icon} width={size} {color} />
    </div>

    <slot />
</div>

<style>
    .vr_e {
        border-right: 2px solid var(--color-primary);
    }
</style>
