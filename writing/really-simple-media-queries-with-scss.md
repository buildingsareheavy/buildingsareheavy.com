---
title: Really Simple Media Queries With SCSS
excerpt: I have all the media queries I need in 4 variables and 3 SASS mixins.
date: 2019-08-23
cover_image: ./images/really-simple-media-queries-with-scss/cover.jpg
tags:
  - CSS
---

Ok, before we get started, I know that CSS Grid should eliminate a lot of media queries but sometimes they are still necessary. If you don't know CSS Grid yet or need a refresh, [Jen Simmons](https://jensimmons.com/) has an amazing Layoutland Youtube series explaining [CSS Grid](https://www.youtube.com/watch?v=FEnRpy9Xfes&list=PLbSquHt1VCf1x_-1ytlVMT0AMwADlWtc1).

## Let's Begin

We are going to declare a few standard breakpoint variables to make life easy.

```scss
// Variables
$desktop-xl: '1200px';
$desktop: '992px';
$tablet: '768px';
$mobile: '480px';
```

Then we are going to write a couple of mixins.

```scss
// Mixins
@mixin bigger-than($min-width) {
  @media only screen and (min-width: $min-width) {
    @content;
  }
}

@mixin smaller-than($max-width) {
  @media only screen and (max-width: calc(#{$max-width} - 1px)) {
    @content;
  }
}

@mixin between($small-width, $big-width) {
  @media only screen and (max-width: calc(#{$big-width} - 1px)) and (min-width: #{$small-width}) {
    @content;
  }
}
```

You can really pass any number you want into the arguments, but below we will be using the variables we declared.

To invoke one of these `mixins`, it would look something like this:

```scss
@include between($tablet, $desktop) {
  body {
    background: red;
    p {
      background: green;
    }
  }
}
```

**Boom!** We created some very useful media queries.

With just `smaller-than`, `bigger-than`, and `between` you have everything you need 😇
