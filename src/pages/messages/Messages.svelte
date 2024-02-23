<!-- svelte-ignore a11y-autofocus -->
<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";
  import { eventStore } from "@stores/event.js";
  import { getMessages, convertMessage, saveMessage } from "@api/messageApi.js";
  import Select from "svelte-select";
  import Message from "./Message.svelte";

  let isCreateMode = false;

  const options = ["기본", "존댓말", "반말"];
  let selectedOption = "기본";
  let messages = [];
  let text = ``;

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

  async function messageClick(e) {
    text = e.detail.message;
    isCreateMode = true;
  }

  function copy() {
    navigator.clipboard.writeText(text);
    saveMessage($eventStore.eventType, text);
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

  function directInput() {
    text = "";
    isCreateMode = true;
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
  {#if isCreateMode === false}
    <main>
      {#each messages as message}
        <Message {message} on:messageClick={messageClick} />
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
      <button on:click={directInput}>직접 입력</button>
    </footer>
  {:else}
    <textarea autofocus bind:value={text}></textarea>
    <div class="selectDiv"></div>
    <footer>
      <button on:click={copy}>클립보드에 복사</button>
      <button on:click={() => (isCreateMode = false)}>취소</button>
    </footer>
  {/if}
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

  textarea {
    grid-row: 2 / 11;
    border-radius: 2rem;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid pink;
  }

  textarea:focus {
    outline: none;
  }
</style>
