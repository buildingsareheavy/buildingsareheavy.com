---
title: My CSS and Vue Setup
excerpt: A walk-through on how I set up my Vue projects and SCSS.  Its hella simple but I still always forget.
date: 2019-08-22
tags:
  - CSS
  - Vue
  - Javascript
---

If you don't know how to set up a Vuejs project, then I suggest starting [here](https://vuejs.org/v2/guide/installation.html).

**Ok homies, lemme show you how I add and configure my SCSS to my Vuejs project:**

When using vue-CLI I use `node-sass` as the CSS pre-processor. It seems to be the go-to, and honestly I tried doing some research but all the nerds got too nerdy. I think it's faster? 🤷🏻‍♂️

Then in the parent directory, I create a `config.vue.js` file, and paste the following:

```javascript
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/index.scss";`,
      },
    },
  },
};
```

Don't forget to actually make a `styles` directory and `index.scss` file inside `src`.

Inside `index.scss` import the files you want and create them in the same directory. Here's an example of what my `styles` directory looks like:

```css
@import './_normalize'; // copied from https://necolas.github.io/normalize.css/
@import './_variables';
@import './_typography';
@import './_mixins';
@import './_base';
```

TBH, I really need to make a git repo for this. When I do I'll update it here...

I also need to make a post about some of the cool things I put in my .scss files, like media query mixins.

For now I want to shout out [Sarah Drasner](https://twitter.com/sarah_edo) for the [reference](https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/) and for being overall amazing.
