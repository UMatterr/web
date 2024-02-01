<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<script>
  import { push } from "svelte-spa-router";
  import { recentHome } from "@stores/page.js";
  import homeSvg from "@assets/home.svg";
  import homeFillSvg from "@assets/home-fill.svg";
  import personSvg from "@assets/person.svg";
  import personFillSvg from "@assets/person-fill.svg";
  import settingSvg from "@assets/setting.svg";
  import settingFillSvg from "@assets/setting-fill.svg";

  function homeClick() {
    recentHome.set("event");
    push("/events");
  }

  function personClick() {
    recentHome.set("friend");
    push("/friends");
  }

  function settingClick() {
    recentHome.set("setting");
    push("/setting");
  }
</script>

<div>
  {#if $recentHome === "event"}
    <img class="item" src={homeFillSvg} alt="" />
    <img on:click={personClick} class="item" src={personSvg} alt="" />
    <img on:click={settingClick} class="item" src={settingSvg} alt="" />
  {:else if $recentHome === "friend"}
    <img on:click={homeClick} class="item" src={homeSvg} alt="" />
    <img class="item" src={personFillSvg} alt="" />
    <img on:click={settingClick} class="item" src={settingSvg} alt="" />
  {:else if $recentHome === "setting"}
    <img on:click={homeClick} class="item" src={homeSvg} alt="" />
    <img on:click={personClick} class="item" src={personSvg} alt="" />
    <img class="item" src={settingFillSvg} alt="" />
  {/if}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
  }

  .item {
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
  }
</style>
