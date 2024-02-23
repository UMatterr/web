<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";
  import { eventStore } from "@stores/event.js";
  import { getMessages, convertMessage } from "@api/messageApi.js";
  import Select from "svelte-select";
  import Message from "./Message.svelte";

  const options = ["기본", "존댓말", "반말"];
  let selectedOption = "기본";
  let messages = [];

  onMount(async () => {
    currentPage.set("메시지 생성");
    const result = await getMessages($eventStore.eventType);
    messages = [...result.phrase];
  });

  async function generateMessage() {
    const result = await getMessages($eventStore.eventType);
    console.log(result);
    messages = [...result.phrase];
    selectedOption = "기본";
  }

  async function convertButton(e) {
    let how;
    if (e.detail.value === "기본") {
      how = "asis";
    } else if (e.detail.value === "존댓말") {
      how = "formal";
    } else if (e.detail.value === "반말") {
      how = "informal";
    }
    const result = await convertMessage(messages, how);
    messages = [...result.phrase];
  }
</script>

<div class="grid">
  <header>
    <span>
      {$eventStore.date}
    </span>

    <span>
      {$eventStore.friendName}
    </span>

    <span>
      {$eventStore.eventName}
    </span>
  </header>
  <main>
    {#each messages as message}
      <Message {message} />
    {/each}
  </main>
  <div class="selectDiv">
    <Select
      items={options}
      bind:value={selectedOption}
      searchable={false}
      clearable={false}
      showChevron={true}
      on:change={convertButton}
    />
  </div>
  <footer>
    <button on:click={generateMessage}>다시 생성</button>
    <button>직접 입력</button>
  </footer>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(15, 1fr);
    height: 100%;
  }

  header {
    grid-row: 1 / 2;
    display: flex;
  }

  header span {
    flex: 1;
    text-align: center;
    border: 1px solid pink;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 5px;
  }

  main {
    grid-row: 2 / 11;
    overflow-y: auto;
    border-radius: 2rem;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid pink;
  }

  .selectDiv {
    grid-row: 11 / 12;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    margin: 0 auto;
  }

  footer {
    grid-row: 12 / 13;
    display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  footer button {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
  }
</style>
