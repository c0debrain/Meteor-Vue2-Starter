import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

const routerFactory = new RouterFactory({
	mode: 'history',
	scrollBehavior: nativeScrollBehavior,
})
// Not found
import NotFound from './pages/NotFound.vue';
import Home from './pages/Home.vue';

RouterFactory.configure(factory => {
	factory.addRoutes([
		{
			path: '/',
			name: 'home',
			component: Home
		}
	]);
	factory.addRoute({
		path: '*',
		component: NotFound,
	});
}, -1);

export default routerFactory;