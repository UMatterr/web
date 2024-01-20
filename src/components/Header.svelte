<script>
  import { currentPage } from "@stores/page.js";
</script>

<div>
  <h1>{$currentPage}</h1>
</div>

<style>
  div {
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
