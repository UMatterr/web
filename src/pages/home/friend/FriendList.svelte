<script>
  import { onMount } from "svelte";
  import { currentPage, recentHome } from "@stores/page.js";
  import Friend from "./Friend.svelte";
  import { getFriends } from "@api/friendApi.js";

  let friends = [];

  onMount(async () => {
    currentPage.set("친구");
    recentHome.set("friend");
    friends = await getFriends();
  });
</script>

<div class="container">
  {#each friends as friend}
    <Friend {friend} />
  {/each}
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: 1rem;
  }
</style>
