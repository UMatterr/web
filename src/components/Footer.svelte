<script>
  export let page;

  import homeSvg from "@assets/home.svg";
  import personSvg from "@assets/person.svg";

  function homeClick() {
    page = "event";
    console.log("homeClick");
  }

  function personClick() {
    page = "friend";
    console.log("personClick");
  }
</script>

<div>
  <img on:click={homeClick} class="item" src={homeSvg} alt="" />
  <img on:click={personClick} class="item" src={personSvg} alt="" />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
  }

  .item {
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
  }
</style>
