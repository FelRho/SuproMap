<script>
    export let title;
</script>


<div class="card">
    <div class="card-header">
        <h5 class="p-0 m-0 headline">{title}</h5>
    </div>
    <div class="card-body">
        <slot />
    </div>
</div>

