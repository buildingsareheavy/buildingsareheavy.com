---
title: Making Routes Work On Netlify While Using Vue
excerpt: I was having problems with typed links that appeared broken in Netlify. The solution was so much easier than I realized...
date: 2019-08-28
cover_image: ./images/making-routes-work-in-netlify-with-vue/cover.jpg
tags:
  - Netlify
  - Javascript
  - Vue
  - Tutorial
---

If you're using vue-router and Netlify you need to set a [custom rewrite rule](https://www.netlify.com/docs/redirects/#rewrites-and-proxying), otherwise when you do anything other than click through them, (ex. type it in manually, copy and paste) you will end up seeing this:

![Page Not Found](./images/making-routes-work-in-netlify-with-vue/not-found.png)

To fix this, create a `_redirects` file in `/public` and paste:

```_redirects
/* /index.html 200
/* /index.html 404
```

Ok so let's break this down a little bit. It's saying when you go to any URL (`/*`) serve `index.html` whether it's OK (`200`) or No Response (`404`).

**PRO TIP:** If you have [Netlify Dev](https://www.netlify.com/products/dev/) installed on your computer you can run `npm run build` to make the latest build of your Vue site. Then `netlify dev --live` to see what your site looks like on the Netlify servers. That way you're not having to push to your repo, wait for deployment, and wasting a bunch of commits.

[Reference](https://medium.com/@lpellis/deploying-vue-with-netlify-from-scratch-28b6c2249081)
