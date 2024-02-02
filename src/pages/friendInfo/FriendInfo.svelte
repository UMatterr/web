<script>
  import { onMount } from "svelte";
  import { pop, querystring } from "svelte-spa-router";
  import { currentPage } from "@stores/page.js";
  import { getFriendInfo, deleteFriend } from "@api/friendApi.js";
  import InfoMode from "./InfoMode.svelte";
  import AddMode from "./AddMode.svelte";

  let addMode = false;
  let friendId = null;
  let friendName = "";
  onMount(async () => {
    friendId = $querystring.split("=")[1].trim();
    const friend = await getFriendInfo(friendId);
    friendName = friend.friendName;
    currentPage.set(friendName);
  });

  async function saveButton() {
    if (addMode) {
      // 이벤트 추가
      console.log("이벤트 추가");
    }
  }

  async function deleteEvent() {
    const success = await deleteFriend(friendId);
    if (success) {
      pop();
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
      bind:value={friendName}
      autocomplete="off"
    />
  </div>

  <div class="main">
    {#if addMode === false && friendId}
      <InfoMode bind:addMode {friendId} on:delete={deleteEvent} />
    {:else if addMode === true}
      <AddMode bind:addMode {friendId} />
    {/if}
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
    grid-row: 3 / 16;
    overflow-y: scroll;
  }
</style>
