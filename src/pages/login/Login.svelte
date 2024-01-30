<script>
  import { BACKEND_URL } from "@src/config";
  import umatterLogo from "@assets/umatter.svg";
  import kakaoButton from "@assets/kakao_login_medium_wide.png";
</script>

<div class="container">
  <h1 class="item">UMatter</h1>
  <img class="item2 logo" src={umatterLogo} alt="" />
  <a href="{BACKEND_URL}/auth/login"><img src={kakaoButton} alt="" /></a>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 100vh;
    width: 100vw;
  }

  .item {
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
    font-size: 2rem;
    font-weight: 700;
  }

  .item2 {
    grid-row: 2 / 3;
    justify-self: center;
    align-self: center;
  }

  .item3 {
    grid-row: 3 / 4;
    justify-self: center;
    align-self: center;
    border: none;
    background-color: transparent;
  }
</style>
