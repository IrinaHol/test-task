import {AXIOS} from "./axiosConfig";

class MovieService {
	async getMovies(params) {
		try {
			const {data} = await AXIOS.get('/discover/movie/popular', {
				params

			})
			return data
		} catch (e) {
			console.log(e)
		}
	}

	async getMoviesPage(page) {
		try {
			const {data} = await AXIOS.get(`/discover/movie?page=${page}`)

			return data
		} catch (e) {
			console.log(e)
		}
	}

	async getMovieDetailsById(movieId) {
		try {
			const {data} = await AXIOS.get(`/movie/${movieId}`)

			return data
		} catch (e) {
			console.log(e)
		}
	}

}

export const moviesService = new MovieService();
