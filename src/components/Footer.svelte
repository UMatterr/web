<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<script>
  export let page;

  import homeSvg from "@assets/home.svg";
  import homeFillSvg from "@assets/home-fill.svg";
  import personSvg from "@assets/person.svg";
  import personFillSvg from "@assets/person-fill.svg";

  function homeClick() {
    page = "event";
  }

  function personClick() {
    page = "friend";
  }
</script>

<div>
  {#if page === "event"}
    <img class="item" src={homeFillSvg} alt="" />
    <img on:click={personClick} class="item" src={personSvg} alt="" />
  {:else if page === "friend"}
    <img on:click={homeClick} class="item" src={homeSvg} alt="" />
    <img class="item" src={personFillSvg} alt="" />
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
