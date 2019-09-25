---
title: Really Simple Media Queries With SCSS
date: '2019-08-23'

subtitle: 'I have all the media queries I need in 4 variables and 3 SASS mixins.'
published: true
featImage: './cover.jpg'
---

Ok, before we get started, I know that CSS Grid should eliminate a lot of media queries but sometimes they are still necessary. If you don't know CSS Grid yet or need a refresh, [Jen Simmons](https://jensimmons.com/) has an amazing Layoutland Youtube series explaining [CSS Grid](https://www.youtube.com/watch?v=FEnRpy9Xfes&list=PLbSquHt1VCf1x_-1ytlVMT0AMwADlWtc1).

Alright, enough Ethan! Get to the simple code you talked about!

Ok, here it is:

**VARIABLES:**

```css
$desktop-xl: '1200px';
$desktop: '992px';
$tablet: '768px';
$mobile: '480px';
```

**MIXINS:**

```css
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

To invoke one of these `mixins`, it would look something like this:

```css
@include between($tablet, $desktop) {
  body {
    background: red;
    p {
      background: green;
    }
  }
}
```

Ok let's break this down, and clear some things up. The variable names in the **MIXINS** really don't matter, they just make it easier to remember when you reference them. The variables that are labeled in the **VARIABLES** section above are common breakpoints, but you can really pass any number you want into the arguments.

With just `smaller-than`, `bigger-than`, and `between` you have everything you need 😇
