import Vue from "vue";
import Router from "vue-router";
import MoviesList from '../components/MoviesList';
import SingleMovie from '../components/SingleMovie';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: 'MoviesList',
			component: MoviesList,
		},
			// children: [
			// 	{
			// 		path: "/movies",
			// 		name: "singleMovie",
			// 		component: () => import("@/components/SingleMovie")
			// 	}]

		// children: [
	{
		path: '/movies/:id',
		name: 'SingleMovie',
		component: SingleMovie,

	// ]
		// {
		// 	path: /movies/:id'',
		// 	name: 'SingleMovie',
		// 	component: () => import("@/components/SingleMovie")
		// }
		}],
	mode: 'history',
	// computed: {
	// 	id() {
	// 		return this.$route.params.id;
	// 	},
	// },
})


