import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Photography from './views/Photography.vue';
import Writing from './views/Writing.vue';
import BlogPost from './components/BlogPost.vue';
import Portfolio from './views/Portfolio.vue';
import RssAtomSitemap from './views/RssAtomSitemap';

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
      component: About,
    },
    {
      path: '/photography',
      name: 'photography',
      component: Photography,
    },
    {
      path: '/writing',
      name: 'writing',
      component: Writing,
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost,
    },
    {
      path: '/portfolio',
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
