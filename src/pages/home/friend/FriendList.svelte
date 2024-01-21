<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";
  import Friend from "./Friend.svelte";

  onMount(() => {
    currentPage.set("친구");
  });
</script>

<div class="container">
  <Friend />
  <Friend />
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: 1rem;
  }
</style>
