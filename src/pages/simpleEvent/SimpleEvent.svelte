<script>
  import { onMount } from "svelte";
  import { currentPage } from "@stores/page.js";

  onMount(() => {
    currentPage.set("간편 메시지 생성");
  });
</script>

<div class="grid">
  <div class="textAreaDiv">
    <textarea class="form-control" name="" id="" cols="30" rows="11"></textarea>
  </div>

  <div class="createButtonDiv">
    <button>생성</button>
  </div>

  <div class="resultDiv">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">카테</th>
          <th scope="col">이름</th>
          <th scope="col">날짜</th>
          <th scope="col">주기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>졸업</td>
          <td>홍길동</td>
          <td>2222-22-22</td>
          <td>한번</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="saveButtonDiv">
    <button>저장</button>
    <button>수정</button>
  </div>
</div>

<style>
  .grid {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(14, 1fr);
    height: 100%;
  }

  .textAreaDiv {
    grid-row: 1 / 5;
  }

  .createButtonDiv {
    grid-row: 6 / 7;
    display: grid;
  }

  .resultDiv {
    grid-row: 7 / 9;
  }

  .saveButtonDiv {
    grid-row: 9 / 10;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  button {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  table {
    text-align: center;
  }
</style>
