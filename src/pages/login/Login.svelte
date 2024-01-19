<script>
  import umatterLogo from '@assets/umatter.svg';
  import kakaoButton from '@assets/kakao_login_large_narrow.png';
</script>

<div>
  <h1>UMatter</h1>
  <img class="logo" src={umatterLogo} alt="">
  <button>
    <img src={kakaoButton} alt="">
  </button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .logo {
    width: 20rem;
    margin-bottom: 1rem;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  button img {
    width: 15rem;
  }
</style>