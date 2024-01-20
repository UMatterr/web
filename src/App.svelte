<script>
  import Login from "@pages/login/Login.svelte";
  import { isLoggedIn } from "@stores/user.js";

  import Router from "svelte-spa-router";
  import { rootRouter } from "./routes/rootRouter.js";
</script>

{#if $isLoggedIn}
  <Router routes={rootRouter} />
{:else}
  <Login />
{/if}
