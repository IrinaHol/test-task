<template>
  <div>
    <header class="btnHeader">
      <button
          @click="hasHistory()
    ? $router.go(-1)
    : $router.push('/')" class="btnBack">
        <span>Back</span>
      </button>
    </header>
    <section class="wrapperDetails">
      <div class="oneMovieBox">
        <div><img :src="'https://image.tmdb.org/t/p/w200' + oneMovie.poster_path" alt=oneMovie.original_title/></div>
        <h3>{{ oneMovie.title }}</h3>
        <p>{{ oneMovie.overview }}</p>
        <div class="countryTitle"><span>COUNTRY: &nbsp; </span>
          <div v-for="country in oneMovie.production_countries" :key="country.name">
            <span>{{ country.name }}</span></div>
        </div>
        <div class="genresBox"><span>GENRES: &nbsp;</span>
          <div v-for="genre in oneMovie.genres" :key="genre.id">
            <span>{{ genre.name }}; &nbsp;</span></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {moviesService} from "@/services/MoviesService";

export default {
  name: "SingleMovie",
  data: () => ({
    oneMovie: [],
  }),

  created() {
    this.getOneMovie()
  },

  methods: {
    async getOneMovie() {
      const data = await moviesService.getMovieDetailsById(this.$route.params.id);
      this.oneMovie = data;

    },
    hasHistory() {
      return window.history.length > 2
    }
  }
}

</script>

<style scoped>
.wrapperDetails {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.oneMovieBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  width: 60%;
  border: 1px solid black;
}

.oneMovieBox h3 {
  color: darkred;
  font-size: 30px;
  font-family: "Bookman Old Style", sans-serif;
  margin: 10px;
}

.oneMovieBox p {
  font-size: 20px;
  font-family: "Cambria Math", sans-serif;
  margin: 10px;
}

.countryTitle {
  display: flex;
  justify-content: center;
  font-family: "Bookman Old Style", sans-serif;
  font-size: 22px;
  font-weight: 520;
}

.genresBox {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-family: "Bookman Old Style", sans-serif;
  font-size: 18px;
}

.btnHeader {
  display: flex;
}

.btnBack {
  border-radius: 4px;
  border: none;
  background-color: #f4511e;
  color: #FFFFFF;
  text-align: center;
  font-size: 24px;
  padding: 12px;
  width: 130px;
  transition: all 0.5s;
  margin: 20px;
  cursor: pointer;
}

.btnBack span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btnBack span:before {
  content: '\00AB';
  position: absolute;
  opacity: 0;
  top: 0;
  left: -20px;
  transition: 0.5s;
}

.btnBack:hover span {
  padding-left: 25px;
}

.btnBack:hover span:before {
  opacity: 1;
  left: 0;
}
</style>
