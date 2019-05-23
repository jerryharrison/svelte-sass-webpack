<script type="text/javascript">
    import { Router, Route } from 'svero';
    import Index from './Routes/Index.svelte';
</script>

<style>

</style>

<Router>
    <Route path="*" component={Index} />
</Router>