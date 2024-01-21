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
  <div class="item-name">
    <label for="name">이름</label>
    <input
      class="form-control"
      placeholder="이름"
      type="text"
      id="name"
      name="name"
      autocomplete="off"
    />
  </div>

  <div class="item-birthDay">
    <label for="birthDay">생일</label>
    <input class="form-control" type="date" id="birthDay" name="birthDay" />
  </div>

  <div class="eventList">eventList</div>

  <div class="item-addEvent">
    <button>이벤트 추가</button>
  </div>

  <div class="buttonDiv">
    <button>저장</button>
    <button>취소</button>
  </div>
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

  .item-name {
    grid-row: 1 / 2;
    align-self: center;
    color: #333;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
  }

  div label {
    grid-column: 1 / 2;
    align-self: center;
    color: #333;
  }

  div input {
    grid-column: 2 / 11;
    align-self: center;
    color: #333;
  }

  .item-birthDay {
    grid-row: 2 / 3;
    align-self: center;
    color: #333;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
  }

  .eventList {
    grid-row: 3 / 13;
    overflow-y: scroll;
    border: 1px solid #eaeaea;
  }

  .item-addEvent {
    grid-row: 13 / 14;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-addEvent button {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .buttonDiv {
    grid-row: 15 / 16;
    display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .buttonDiv button {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
  }
</style>
