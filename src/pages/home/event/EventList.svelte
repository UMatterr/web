<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";
  import { push } from "svelte-spa-router";
  import Select from "svelte-select";
  import Event from "./Event.svelte";
  import { getAllEvents } from "@api/eventApi.js";

  let items = ["시간순", "이름검색", "카테고리"];
  let events = [];

  onMount(async () => {
    currentPage.set("이벤트 목록");
    events = await getAllEvents();
    console.log(events);
  });

  let selectedFilter = "시간순";
</script>

<div class="grid">
  <div class="filterDiv">
    <div class="filterSelect">
      <Select
        {items}
        showChevron={true}
        clearable={false}
        searchable={false}
        bind:value={selectedFilter}
      />
    </div>
    <div class="restDiv">
      {#if selectedFilter.label === "이름검색"}
        <input class="form-control" type="text" />
      {:else if selectedFilter.label === "카테고리"}
        <Select />
      {/if}
    </div>
  </div>
  <div class="mainDiv">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">이벤트</th>
          <th scope="col">이름</th>
          <th scope="col">날짜</th>
          <th scope="col">주기</th>
        </tr>
      </thead>
      <tbody>
        {#each events as event}
          <Event {event} />
        {/each}
      </tbody>
    </table>
  </div>

  <div class="buttonDiv">
    <button>간편 메시지 생성</button>
    <button on:click={() => push("/simple_event")}>간편 이벤트 등록</button>
  </div>
</div>

<style>
  .grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(16, 1fr);
    grid-auto-rows: minmax(0, 1fr);
    height: 100%;
  }

  .filterDiv {
    grid-row: 1/2;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0.25rem;
  }

  .filterSelect {
    grid-column: 1/2;
  }

  .restDiv {
    grid-column: 2/4;
  }

  .mainDiv {
    grid-row: 2/16;
  }

  .buttonDiv {
    grid-row: 16/17;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  button {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  table {
    text-align: center;
  }
</style>
