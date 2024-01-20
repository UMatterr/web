<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";

  onMount(() => {
    currentPage.set("이벤트 목록");
  });
</script>

<h1>EventPage</h1>
