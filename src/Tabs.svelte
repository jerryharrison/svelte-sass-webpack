<script >
    console.log($$props);
    console.log(arguments);
    console.log($$props.$$slots.default[0]());
</script>

<style type="text/sass">

</style>

<slot name="tab"></slot>

<ul role="tablist">
<!--    {#each $$props.$$slots as slot}-->

<!--    {/each}-->
  <li role="presentation">
    <a role="tab" tabindex="-1" href="#section1">Section 1</a>
  </li>
  <li role="presentation">
    <a role="tab" href="#section2" aria-selected="true">Section 2</a>
  </li>
  <li role="presentation">
     <a role="tab" tabindex="-1" href="#section2">Section 3</a>
  </li>
</ul>

<slot name="panel"></slot>