<script>
  export let addMode;
  import Select from "svelte-select";
  import { onMount } from "svelte";
  import { getEventTypes } from "@api/eventApi.js";

  let eventTypes;
  let selectedEventType = null;
  let selectedRepeat = null;

  onMount(async () => {
    const etypes = await getEventTypes();
    console.log(etypes);
    eventTypes = etypes.map((e) => {
      return { value: e.eventTypeId, label: e.name };
    });
  });
</script>

<div class="grid">
  <div class="item">
    <label for="date">날짜</label>
    <input class="form-control" type="date" />
  </div>

  <div class="item">
    <label for="category">이벤트</label>
    <Select
      items={eventTypes}
      showChevron={true}
      clearable={false}
      searchable={false}
      bind:value={selectedEventType}
    />
  </div>

  <div class="item">
    <label for="repeat">주기</label>
    <Select
      items={[
        { value: "365", label: "매년" },
        { value: "30", label: "매달" },
        { value: "7", label: "매주" },
      ]}
      showChevron={true}
      clearable={false}
      searchable={false}
      bind:value={selectedRepeat}
    />
  </div>

  <div class="buttonDiv">
    <button>추가</button>
    <button on:click={() => (addMode = !addMode)}>취소</button>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(13, 1fr);
    height: 100%;
  }

  .item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: center;
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
