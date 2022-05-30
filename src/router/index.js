import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
var routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return import(/* webpackChunkName: "about" */ '../views/AboutView.vue'); }
    }
];
var router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map