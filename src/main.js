// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue';
import VuePrism from 'vue-prism';
Vue.use(VuePrism);
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    sm: 480,
    md: 768,
    lg: 992,
  },
});

import DefaultLayout from '~/layouts/Default.vue';

// dark theme
// import 'prismjs/themes/prism-tomorrow.css';

// light theme
import 'prismjs/themes/prism.css';

import '@/assets/scss/index.scss';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
