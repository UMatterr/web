<script>
  import { onMount } from "svelte";
  import { querystring } from "svelte-spa-router";
  import { currentPage } from "@stores/page.js";

  onMount(() => {
    let friendId = null;
    if ($querystring) {
      friendId = $querystring.split("=")[1].trim();
      console.log(friendId);
      currentPage.set("친구이름이 들어갈 예정");
    } else {
      currentPage.set("친구 생성");
    }
  });
</script>

<div class="grid">
  <input
    class="form-control"
    placeholder="이름"
    type="text"
    id="name"
    name="name"
    autocomplete="off"
  />

  <div class="eventList">ddd</div>

  <div class="buttonDiv">ddd</div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(16, 1fr);
    grid-auto-rows: minmax(0, 1fr);
    padding: 1rem;
    height: 100%;
  }

  #name {
    grid-row: 1 / 2;
    align-self: center;
    color: #333;
  }

  .eventList {
    grid-row: 2 / 14;
    overflow-y: scroll;
    border: 1px solid #eaeaea;
  }

  .buttonDiv {
    grid-row: 15 / 16;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eaeaea;
  }
</style>
