import {AXIOS} from "./axiosConfig";

class MovieService{
	async getMovies(params){
		const {data} = await AXIOS.get('/discover/movie', {
			params

		})
		return data
	}

	async getMoviesPage(page){
		const {data} = await AXIOS.get(`/discover/movie?page=${page}`)

		return data
	}

	async getMovieDetailsById(movieId){
		const {data} = await AXIOS.get(`/movie/${movieId}`)
		console.log(data)
		return data
	}

}
export const moviesService = new MovieService();
