<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<script>
  export let event;
  import trashSvg from "@assets/trash.svg";
  import { deleteEvent } from "@api/eventApi.js";

  async function deleteEventButton() {
    const success = await deleteEvent(event.eventId);
    if (success) {
      window.location.reload();
    } else {
      alert("삭제에 실패했습니다.");
    }
  }
</script>

<div>
  <span>{event.eventName}</span>
  <img on:click={deleteEventButton} src={trashSvg} alt="" />
</div>

<style>
  div {
    display: flex;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
  }
  span {
    color: #333;
  }

  img {
    margin-left: auto;
  }
</style>
