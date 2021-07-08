 import Vue from "vue";
 import axios from "axios";
 import VueAxios from "vue-axios";
 import { BASE_URL } from "@/configs/config";

const ApiService = {
	init() {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = BASE_URL;
	},

	setHeader() {
		Vue.axios.defaults.headers.common[
			"Authorization"
			] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmExNDJkOGQ3MzkzNjYxOGNmNTAzOTVmODNjMjE1MiIsInN1YiI6IjVmZmViMDhmMGZmMTVhMDA0MDViMDQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vEpFc02qpOkmE6IFeELJD35Z66gG-cQ1jtk3xyC7CR0';
	},
	get(resource, slug = "") {
		return Vue.axios.get(`${resource}/${slug}`).catch(error => {
			throw new Error(`[RWV] ApiService ${error}`);
		});
	},
}

 export default ApiService;
