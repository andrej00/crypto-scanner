// typings.d.ts or router.ts
import "vue-router";
	declare module "vue-router" {
	interface RouteMeta {
		// is optional
		requiresAuth?: boolean;
		hideNavbar?: boolean;

		// must be declared by every route
		// requiresAuth: boolean
	}
}
