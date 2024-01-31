<script>
  import { onMount } from "svelte";
  import { querystring, pop } from "svelte-spa-router";
  import { currentPage } from "@stores/page.js";
  import { createFriend } from "@api/friendApi.js";
  import EventList from "./EventList.svelte";
  import AddEvent from "./AddEvent.svelte";

  let addMode = false;
  let friendId = null;
  onMount(() => {
    if ($querystring) {
      friendId = $querystring.split("=")[1].trim();
      console.log(friendId);
      currentPage.set("친구이름이 들어갈 예정");
    } else {
      currentPage.set("친구 생성");
    }
  });

  async function saveButton() {
    const name = document.getElementById("name").value;
    if (!name) {
      alert("이름을 입력해주세요");
      return;
    }

    if (friendId) {
      // update
    } else {
      // create
      const res = await createFriend(name);
      if (res) {
        alert("성공");
      } else {
        alert("실패");
      }
    }
  }
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

  <div class="main">
    {#if addMode === false}
      <EventList />
    {:else}
      <AddEvent />
    {/if}
  </div>

  <div class="item-addEvent">
    <button
      on:click={() => {
        addMode = !addMode;
      }}
    >
      {#if addMode === false}
        이벤트 추가
      {:else}
        이벤트 추가 취소
      {/if}
    </button>
  </div>

  <div class="buttonDiv">
    <button on:click={saveButton}>저장</button>
    <button on:click={() => pop()}>취소</button>
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

  .main {
    grid-row: 3 / 13;
    overflow-y: scroll;
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
