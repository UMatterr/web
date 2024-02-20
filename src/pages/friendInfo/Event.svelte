<script>
  export let event;
  import trashSvg from "@assets/trash.svg";
  import { onMount } from "svelte";

  onMount(() => {
    console.log(event);
  });
</script>

<div>
  <span>{event.eventName}</span>
  <img src={trashSvg} alt="" />
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
