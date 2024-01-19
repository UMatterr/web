<script>
  import Login from "@pages/login/Login.svelte";
  import Home from "@pages/home/Home.svelte";
  import { isLoggedIn } from "@stores/user.js";
</script>

{#if $isLoggedIn}
  <Home />
{:else}
  <Login />
{/if}
