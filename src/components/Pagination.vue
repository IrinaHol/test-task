<template>
  <div>
    <div class="btnPagination">
      <button class="btn" :class='{inactive: currentPage - 1 === 0}' @click='handleChangePage(1)'><span>first page</span></button>
      <button :class='{inactive: currentPage - 1 === 0}' @click='handleChangePage(currentPage-1 >= total ? currentPage-1 : 1)'><img src='@/assets/img/left-arrow.svg' alt="left"/></button>
      <span>{{ currentPage }} of {{ total }}</span>
      <button :class='{inactive: currentPage + 1 > total}' @click='handleChangePage(currentPage+1 <= total ? currentPage+1 : total)'><img src='@/assets/img/right-arrow.svg' alt="right"/></button>
      <button :class='{inactive: currentPage + 1 > total}' @click='handleChangePage(total)'><span>last page</span></button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Pagination",
  props: ['total'],
  data: () => ({
    currentPage: 1
  }),
  methods: {
    handleChangePage(pageNumber) {
      this.currentPage = pageNumber;
      this.$emit('pageChanged', pageNumber)
    }
  }

}
</script>

<style scoped>
button {
  margin: 10px 6px;
  padding: 7px;
  border: none;
  border-radius: 15px;

  background-color: #4CAF50;
  cursor: pointer;
  font-size: 20px;
  font-family: "Arial Narrow",sans-serif;

}
button img {
  width: 15px;

}
.btnPagination span {
  font-size: 20px;
  font-family: "Arial Narrow",sans-serif;
  font-weight: 600;
}

.inactive {
  opacity: 0.5;
}
</style>
