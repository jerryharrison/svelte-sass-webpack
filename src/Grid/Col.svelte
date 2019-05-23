<script>
    export let isDemo = false;
    export let sm = false;
    export let md = false;
    export let lg = false;
    export let xl = false;
    export let first = false;
    export let last = false;
</script>

<style type="text/sass">

</style>

<div class="{'col' + ($$props.class || '')}">
    <slot></slot>
</div>