// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue';
import 'remove-focus-outline';
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    sm: 480,
    md: 768,
    lg: 992,
  },
});

import DefaultLayout from '~/layouts/Default.vue';

// Code styling is now in "_code.scss" (inside of index.scss)
// import 'prismjs/themes/prism.css';
import '@/assets/scss/index.scss';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
