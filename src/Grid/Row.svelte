<script>
    export let isDemo = false;
</script>

<style type="text/sass">
.demo
    background: magenta
    color: #fff
    text-align: center
    padding: 1em 0
    margin: .5em 0
</style>

<div class="{'row ' + ($$props.class || '')}" class:demo={isDemo}>
    <slot></slot>
</div>