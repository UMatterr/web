<script>
  export let event;
</script>

<div>
  <span>{event.eventName}</span>
</div>

<style>
  div {
    display: flex;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
    background-color: #cdf5fd;
  }
  span {
    color: #333;
  }
</style>
