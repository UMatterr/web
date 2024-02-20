<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";
  import Select from "svelte-select";
  import Event from "./Event.svelte";
  import { getAllEvents, getEventTypes } from "@api/eventApi.js";

  let items = ["시간순", "이름검색", "카테고리"];
  let events = [];
  let eventTypes = [];
  let selectedEventType;

  onMount(async () => {
    currentPage.set("이벤트 목록");
    events = await getAllEvents();
    const etypes = await getEventTypes();
    eventTypes = etypes.map((e) => {
      return { value: e.eventTypeId, label: e.name };
    });
    console.log(eventTypes);
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
        <Select
          items={eventTypes}
          showChevron={true}
          clearable={false}
          searchable={false}
          bind:value={selectedEventType}
        />
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
    grid-row: 2/17;
  }

  table {
    text-align: center;
  }
</style>
