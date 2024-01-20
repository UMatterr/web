<script>
  import homeSvg from "@assets/home.svg";
  import personSvg from "@assets/person.svg";
</script>

<div>
  <img class="item" src={homeSvg} alt="" />
  <img class="item" src={personSvg} alt="" />
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
