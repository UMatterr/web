<script>
  export let addMode;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function deleteButton() {
    dispatch("delete");
  }
</script>

<div class="grid">
  <div class="eventList">
    <h1>EventList</h1>
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

  .eventList {
    grid-row: 1 / 11;
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
