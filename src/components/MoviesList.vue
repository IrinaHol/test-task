<template>
  <div>
    <header>
      <div v-if="list==='movies'" class="boxSearch">
        <img src='../assets/img/search.svg' alt="search" class="searchIcon"/>
        <input v-model="searchTextValue" type="text" placeholder="Search" class="SearchInput"/>
      </div>

      <section v-if='!searchTextValue'>
        <div class="headerFavorite">
          <button @click="listMovies('movies')">show movies</button>
          <span> {{ cart.length }} </span>
          <button @click="listMovies('favoriteMovie')"> favorites movies</button>
        </div>
      </section>
    </header>

    <main class="mainContainer">

      <div v-if="list==='favoriteMovie'">
        <FavoriteMovie :cart="cart"/>
      </div>

      <div v-if="list==='movies'">
        <section class="movieContainer" v-if='!searchTextValue'>

          <div v-for="(movie) in onSearch" :key="movie.id" class="oneMovieBox">
            <router-link :to="{ name: 'SingleMovie', params: { id: movie.id }}" class="navigation">
              <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" alt=movie.original_title/>
              <span class="movieTitle">{{ movie.title }}</span>
            </router-link>

            <div class="favoriteMovie">
              <button :disabled="(cart.includes(JSON.stringify(movie)))" @click="addItemtoCart(movie)" class="like">
                <span>Like</span>
              </button>

              <button :disabled="(!cart.includes(JSON.stringify(movie)))" @click="removeItemFromCart(movie)" class="dislike">
                <span>Dislike</span>
              </button>
            </div>
          </div>
          <Pagination :total="total" @pageChanged="loadListMovies" class="pagination"/>
        </section>

        <section class="movieContainer" v-else>
          <div v-for="movie in onSearch" :key="movie.id" class="oneMovie" >
            <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" alt=movie.original_title/>
            <span>{{ movie.title }}</span>
            <p>Overview: {{ movie.overview }}</p>
            <span>Date: {{ movie.release_date }}</span>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import {moviesService} from '@/services/MoviesService';
import Pagination from '@/components/Pagination';
import FavoriteMovie from "@/components/FavoriteMovie";

export default {
  name: "MoviesList",
  components: {FavoriteMovie, Pagination},
  data: () => ({
    movies: [],
    page: 1,
    total: 1,
    searchTextValue: "",
    cart: [],
    list: 'movies',
  }),

  computed: {
    onSearch() {
      const search = this.searchTextValue.toLowerCase();
      return this.movies.filter(function (movie) {
        return movie.original_title.toLowerCase().includes(search);
      });
    }
  },

  created() {
    this.loadListMovies(this.page);
  },

  mounted() {
    if (localStorage.getItem('cart')) {
      try {
        this.cart = JSON.parse(localStorage.getItem('cart'));

      } catch (e) {
        localStorage.removeItem('cart');
      }
    }
  },

  methods: {
    async loadListMovies(pageNumber) {
      const {...data} = await moviesService.getMoviesPage(pageNumber);
      this.movies = data.results;
      this.total = data.total_pages;
    },

    addItemtoCart(movie) {
      this.cart.includes(JSON.stringify(movie)) ? '' : this.cart.push(JSON.stringify(movie));

      this.saveMovies();
    },

    removeItemFromCart(movie) {
      const found = this.cart.find(value => {
        if (value) {
          const xxx = JSON.parse(value);
          return xxx.id === movie.id;
        }
      })
      if (found) {
        this.$delete(this.cart, this.cart.indexOf(found));
      }
      this.saveMovies();
    },

    listMovies(list) {
      this.list = list;
    },

    saveMovies() {
      const parsed = JSON.stringify(this.cart);
      localStorage.setItem('cart', parsed);
    },
  }
}
</script>

<style scoped>

.mainContainer {
  margin: 20px 50px 40px;
}

.movieContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}

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

.oneMovie {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 23%;
  margin-bottom: 10px;
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid black;
}
.oneMovie span {
  font-size: 20px;
  font-family: "Bodoni MT Poster Compressed",sans-serif;
  margin-top: 10px;
}
.pagination {
  margin: 0 auto;
}

.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none;
}

.movieTitle {
  color: black;
  margin-top: 6px;
  font-family: "Arial Black", sans-serif;
  font-size: 18px;
}

.boxSearch {
  display: flex;
  align-items: center;
  margin-left: 50px;
}

.SearchInput {
  width: 300px;
  height: 40px;
  background: #F9FAFB;
  border: 1px solid #E5E7EB;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  padding-left: 44px;

}

::-webkit-input-placeholder {
  color: #6B7280;
  opacity: 0.5;
}

::-moz-placeholder {
  color: #6B7280;
  opacity: 0.5;
}

.searchIcon {
  position: absolute;
  margin-left: 18px;
}

.favoriteMovie {
  display: flex;
  width: 80%;
}

.favoriteMovie button {
  width: 80px;
  height: 30px;
  margin: 0 auto;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.like {
  background-color: #4CAF50;
}

.dislike {
  background-color: crimson;
}

.headerFavorite button {
  padding: 10px;
  background-color: coral;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
}

.headerFavorite button:hover {
  background: crimson;
}

.headerFavorite span {
  font-size: 20px;
}

@media (max-width: 1100px) {
  .oneMovieBox img {
    width: 160px;
  }

  .headerFavorite {
    margin-top: 30px;
  }
}

</style>
