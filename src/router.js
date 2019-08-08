import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Blog from './views/Blog';
import BlogPost from './views/BlogPost';
import Portfolio from './views/Portfolio.vue';
import RssAtomSitemap from '@/components/RssAtomSitemap';

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

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ './views/About.vue'),

    {
      path: '/blog/',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost,
    },
    {
      path: '/portfolio/',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/rss',
      name: 'rss',
      component: RssAtomSitemap,
    },
  ],
});
