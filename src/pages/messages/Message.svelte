<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<script>
  export let message;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function messageClick() {
    dispatch("messageClick", {
      message,
    });
  }
</script>

<p on:click={messageClick}>{message}</p>
