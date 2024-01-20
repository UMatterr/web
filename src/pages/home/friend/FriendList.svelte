<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";

  onMount(() => {
    currentPage.set("친구");
  });
</script>

<div class="container">
  <h1>FriendList</h1>
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }
</style>
