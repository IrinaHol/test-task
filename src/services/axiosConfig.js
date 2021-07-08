import axios from "axios";
import { BASE_URL } from "@/configs/config";

export const AXIOS = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmExNDJkOGQ3MzkzNjYxOGNmNTAzOTVmODNjMjE1MiIsInN1YiI6IjVmZmViMDhmMGZmMTVhMDA0MDViMDQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vEpFc02qpOkmE6IFeELJD35Z66gG-cQ1jtk3xyC7CR0'

	}
})

