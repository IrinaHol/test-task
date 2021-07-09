<template>

  <div class="listFavoriteMovie">
    <span>Your favorite movies </span>
    <div v-for="movie in cart" :key="movie.id" class="oneMovieBox">
      <img :src="'https://image.tmdb.org/t/p/w200' + JSON.parse(movie).poster_path" alt=movie.original_title/>
      <span class="movieTitle">{{ JSON.parse(movie).title }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "FavoriteMovie",
  props: {
    cart: []
  },
}
</script>

<style scoped>
.oneMovieBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 23%;
  margin-bottom: 10px;
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid black;
}

.listFavoriteMovie {
  display: flex;
  flex-direction: column;
}

.listFavoriteMovie span {
  font-size: 35px;
  font-family: "Arial Black", sans-serif;
}
</style>
