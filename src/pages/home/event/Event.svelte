<script>
  export let event;
  import { push } from "svelte-spa-router";
  import { eventStore } from "@stores/event.js";

  function clickHandler() {
    eventStore.set(event);
    push(`/messages`);
  }
</script>

<tr on:click={clickHandler}>
  <td>{event.eventName}</td>
  <td>{event.friendName}</td>
  <td>{event.date}</td>
  <td>{event.repeat}</td>
</tr>
