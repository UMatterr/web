<script>
  import Footer from "@components/Footer.svelte";
  import EventList from "./event/EventList.svelte";
  import FriendList from "./friend/FriendList.svelte";
  import Setting from "./setting/Setting.svelte";
  import { recentHome } from "@stores/page.js";
  import Router from "svelte-spa-router";
  import { homeRouter } from "@routes/homeRouter.js";
</script>

<div class="container">
  <div class="main">
    <Router routes={homeRouter} />
  </div>
  <div class="footer">
    <Footer></Footer>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(15, 1fr);
    grid-auto-rows: minmax(0, 1fr);

    height: 100%;
    width: 100%;
    padding: 0;
  }

  .main {
    grid-row: 1 / 15;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
  }

  .footer {
    grid-row: 15 / 16;
    justify-self: center;
    align-self: center;
    border-top: 1px solid #eaeaea;
    width: 100%;
    height: 100%;
  }
</style>
