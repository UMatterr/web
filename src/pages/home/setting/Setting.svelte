<script>
  import { onMount } from "svelte";
  import { currentPage, recentHome } from "@stores/page.js";
  import { BACKEND_URL } from "@src/config.js";

  onMount(() => {
    currentPage.set("설정");
    recentHome.set("setting");
  });
</script>

<div class="container">
  <a href="{BACKEND_URL}/auth/logout"
    ><button type="button" class="btn btn-danger">로그아웃</button></a
  >
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: 1rem;
  }
</style>
