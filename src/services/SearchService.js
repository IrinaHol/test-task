import {AXIOS} from "./axiosConfig";

class SearchService {
	async getSearch(params) {
		try {
			const {data} = await AXIOS.get('/search/movie', {params}   )
			console.log(data.results);
			return data
		} catch (e) {
			console.log(e)
		}
	}
}

export const searchService = new SearchService();
