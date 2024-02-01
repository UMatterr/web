<script>
  import Login from "@pages/login/Login.svelte";
  import Header from "@components/Header.svelte";
  import Router from "svelte-spa-router";
  import { push, location } from "svelte-spa-router";
  import { onMount } from "svelte";
  import { rootRouter } from "./routes/rootRouter.js";
  import { isLoggedIn } from "@stores/user.js";
  import { getCookie } from "@utils/cookieUtil.js";

  isLoggedIn.set(getCookie("isLoggedIn") === "True" ? true : false);

  onMount(() => {
    console.log($location);
    if ($isLoggedIn && $location === "/") {
      push("/events");
    }
  });
</script>

{#if $isLoggedIn}
  <div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <Router routes={rootRouter} />
    </div>
  </div>
{:else}
  <Login />
{/if}

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(16, 1fr);
    grid-auto-rows: minmax(0, 1fr);

    height: 100%;
    width: 100%;
    padding: 0;
  }

  .header {
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
  }

  .main {
    grid-row: 2 / 17;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
  }
</style>
