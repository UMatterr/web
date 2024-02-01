<script>
  export let addMode;
  export let friendId;
  import Select from "svelte-select";
  import { onMount } from "svelte";
  import { getEventTypes, createEvent } from "@api/eventApi.js";

  let eventTypes;
  let selectedEventType = null;
  let selectedRepeat = null;
  let name = "";

  onMount(async () => {
    const etypes = await getEventTypes();
    eventTypes = etypes.map((e) => {
      return { value: e.eventTypeId, label: e.name };
    });
  });

  async function addButton() {
    const date = document.getElementById("date").value;
    if (!date || !selectedEventType) {
      alert("날짜와 이벤트를 선택해주세요.");
      return;
    }
    const data = {
      eventTypeId: selectedEventType.value,
      friendId,
      name: name ? name : null,
      date: document.getElementById("date").value,
      repeat: selectedRepeat.value,
    };

    const success = await createEvent(data);
    if (success) {
      addMode = !addMode;
    }
  }
</script>

<div class="grid">
  <div class="item">
    <label for="date">날짜</label>
    <input class="form-control" id="date" type="date" />
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
        { value: 365, label: "매년" },
        { value: 30, label: "매달" },
        { value: 7, label: "매주" },
      ]}
      showChevron={true}
      clearable={false}
      searchable={false}
      bind:value={selectedRepeat}
    />
  </div>

  {#if selectedEventType?.label === "기타"}
    <div class="item">
      <label for="etc">기타</label>
      <input class="form-control" type="text" bind:value={name} />
    </div>
  {/if}

  <div class="buttonDiv">
    <button on:click={addButton}>추가</button>
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
