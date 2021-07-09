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
		{
			path: '/movies/:id',
			name: 'SingleMovie',
			component: SingleMovie,
		}
	],
	mode: 'history',
})


