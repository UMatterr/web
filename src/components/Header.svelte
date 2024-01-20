<script>
  import { push } from "svelte-spa-router";
  import { currentPage } from "@stores/page.js";
  import personPlusSvg from "@assets/person-plus.svg";
</script>

<div>
  <h1>{$currentPage}</h1>
  {#if $currentPage === "친구"}
    <button on:click={() => push("/friend/info")}>
      <img src={personPlusSvg} alt="" />
    </button>
  {/if}
</div>

<style>
  div {
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  h1 {
    margin: 0;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
  }

  button {
    margin-left: auto;
    margin-right: 1rem;
    border: none;
    background: none;
  }
</style>
