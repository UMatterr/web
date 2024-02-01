<script>
  import { currentPage } from "@stores/page.js";
  import personPlusSvg from "@assets/person-plus.svg";
  import { createFriend } from "@api/friendApi.js";

  async function saveButton() {
    const name = document.getElementById("friendName").value;
    if (!name) {
      alert("이름을 입력해주세요");
      return;
    }
    const res = await createFriend(name);
    if (res) {
      window.location.reload();
    } else {
      alert("실패");
    }
  }
</script>

<div class="header">
  <h1 class="header-h1">{$currentPage}</h1>
  {#if $currentPage === "친구"}
    <button
      type="button"
      class="btn btn-primary friend-add-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <img src={personPlusSvg} alt="" />
    </button>
  {/if}
</div>

<!-- Button trigger modal -->

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">친구 추가</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <input
          type="text"
          class="form-control"
          placeholder="친구 이름"
          aria-label="친구 이름"
          id="friendName"
          aria-describedby="basic-addon2"
        />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >취소</button
        >
        <button type="button" on:click={saveButton} class="btn btn-primary"
          >친구 추가</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .header {
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .header-h1 {
    margin: 0;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
  }

  .friend-add-button {
    margin-left: auto;
    margin-right: 1rem;
    border: none;
    background: none;
  }
</style>
