import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import AddUser from './views/AddUser.vue';
import Cars from './views/Cars';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/users/',
      name: 'users',
      component: Users,
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUser,
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars,
    }
  ],
});
