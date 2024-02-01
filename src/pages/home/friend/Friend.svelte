<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<script>
  export let friendId;
  export let name;

  import { push } from "svelte-spa-router";

  function link() {
    push(`/friend/info?friendId=${friendId}`);
  }
</script>

<div on:click={link}>
  <span class="left">{name}</span>
  <span class="right">이벤트: 6</span>
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .left {
    color: #333;
  }

  .right {
    color: #333;
    margin-left: auto;
  }
</style>
