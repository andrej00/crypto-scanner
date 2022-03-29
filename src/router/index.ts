import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/sign-up',
			name: 'sign-up',
			component: () => import('../views/SignUp.vue')
		},
		{
			path: '/sign-in',
			name: 'sign-in',
			component: () => import('../views/SignIn.vue')
		},
		{
			path: '/tickers/:id',
			name: 'ticker-chart',
			component: () => import('../views/ChartView.vue'),
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/tickers',
			name: 'tickers',
			component: () => import('../views/AboutView.vue')
		}
	],
});

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(
			getAuth(),
			(user) => {
				removeListener();
				resolve(user);
			},
			reject
		)
	})
}

router.beforeEach(async (to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (await getCurrentUser()) {
			next()
		} else {
			alert('YOU DON\'T HAVE ACCESS!')
			next({name: 'home'})
		}
	} else {
		next()
	}
})
export default router;
