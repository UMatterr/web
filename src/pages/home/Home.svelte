<script>
  import Footer from "./Footer.svelte";
</script>

<div class="container">
  <h1>Home</h1>
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

  .footer {
    grid-row: 15 / 16;
    justify-self: center;
    align-self: center;
    border-top: 1px solid #eaeaea;
    width: 100%;
    height: 100%;
  }
</style>
