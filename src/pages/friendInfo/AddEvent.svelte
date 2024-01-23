<script>
  import Select from "svelte-select";

  const items = ["입학", "졸업", "생일", "기타"];
</script>

<div class="grid">
  <div class="item">
    <label for="date">날짜</label>
    <input class="form-control" type="date" />
  </div>

  <div class="item">
    <label for="category">이벤트</label>
    <Select {items} showChevron={true} clearable={false} searchable={false} />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
    height: 100%;
  }

  .item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: center;
  }
</style>
