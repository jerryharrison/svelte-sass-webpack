<script>
import Row from './Row.svelte';
import Col from './Col.svelte';
</script>

<style type="text/sass">
.demo-block
    background: darkmagenta
    color: #fff
    text-align: center
    padding: 1em 0
    margin: .5em 0
</style>

<Row isDemo>
    <Col>
        <div class="demo-block">1</div>
    </Col>
    <Col>
        <div class="demo-block">1</div>
    </Col>
    <Col>
        <div class="demo-block">1</div>
    </Col>
</Row>

<Row>
    <Col />
</Row>

<Row>
    <Col>Something</Col>
    <Col>Bob</Col>
</Row>