<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";

  onMount(() => {
    currentPage.set("친구 목록");
  });
</script>

<h1>FriendList</h1>
