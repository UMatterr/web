<script>
  export let addMode;
  export let friendId;
  import { onMount, createEventDispatcher } from "svelte";
  import { getEventsByFriend } from "@api/eventApi.js";
  import Event from "./Event.svelte";

  let events = [];

  onMount(async () => {
    events = await getEventsByFriend(friendId);
  });

  const dispatch = createEventDispatcher();

  function deleteButton() {
    dispatch("delete");
  }
</script>

<div class="grid">
  <div class="main">
    <h2>등록된 이벤트</h2>
    <div class="eventList">
      {#each events as event}
        <Event {event} />
      {/each}
    </div>
  </div>

  <div class="addEventButtonDiv">
    {#if !addMode}
      <button on:click={() => (addMode = !addMode)}>이벤트 추가</button>
    {/if}
  </div>

  <div class="buttonDiv">
    <button>저장</button>
    <button on:click={deleteButton}>친구 삭제</button>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(13, 1fr);
    height: 100%;
  }

  .main {
    grid-row: 1 / 11;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
  }

  h2 {
    text-align: center;
    grid-row: 1 / 2;
  }

  .eventList {
    overflow-y: scroll;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    grid-row: 2 / 11;
  }

  .addEventButtonDiv {
    grid-row: 11 / 12;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .addEventButtonDiv button {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .buttonDiv {
    grid-row: 13 / 14;
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
