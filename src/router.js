import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Photography from './components/Photography';
import PhotographyPost from './components/PhotographyPost';
import Writing from './components/Writing';
import WritingPost from './components/WritingPost';
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
      path: '/about/',
      name: 'about',
      component: About,
    },
    {
      path: '/photography/',
      name: 'photography',
      component: Photography,
    },
    {
      path: '/photography/:slug',
      name: 'photography-post',
      component: PhotographyPost,
    },
    {
      path: '/writing/',
      name: 'writing',
      component: Writing,
    },
    {
      path: '/writing/:slug',
      name: 'writing-post',
      component: WritingPost,
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
