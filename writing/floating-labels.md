---
title: Project 020 - Floating Labels
excerpt: Building "Material Design" inspired floating labels in only CSS that are accessible.
date: 2019-11-03
cover_image: ./images/floating-labels/cover.jpg
tags:
  - tutorial
  - css
  - accessibility
---

<iframe height="500" style="width: 100%;" scrolling="no" title="CSS - Material Design Floating Labels" src="https://codepen.io/buildingsareheavy/embed/poopeKd?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/buildingsareheavy/pen/poopeKd'>CSS - Material Design Floating Labels</a> by Buildings Are Heavy
  (<a href='https://codepen.io/buildingsareheavy'>@buildingsareheavy</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<div class="text-center heading" style="padding: var(--spacing) 0;">
<p>This is part of my ongoing "Daily Projects" series that you can view on <a href="https://github.com/buildingsareheavy/daily-projects">Github</a>.</p>

<p>It is also viewable on <a href="https://codepen.io/buildingsareheavy/pen/poopeKd">Codepen</a>.</p>

</div>

---

## What & Why

I've been using [Vuetify](https://vuetifyjs.com/) for a few projects and to be honest it seems to take way longer to prototype something that by scratch. However, I do love the [text field components](https://vuetifyjs.com/en/components/text-fields#text-fields) that it has for `input` and `label` tags., called _"floating labels"_. So I wanted to see if I could create my own versions, and maybe build some reuseable Vue components of my own. It turns out I can do it all in pure CSS.

## What I learned

Although the animations are pretty straight forward, there are few variables to consider that made each example different. For example, on the `.fl-outline` example, there is no easy way to allow the focused label to break up the border without specifying the background color or doing some weird hack. I also learned and refreshed myself on a lot about acessibilty and HTML5 validation.

**NOTE:** I know it's not the best for refactoring, but I purposefully rewrote each example, instead of having common css. In practice I'd want to keep things dry, but I also wanted to see the code together rather than jumping back and forth.

---

### Using `required`, `:required`, `:valid`, and `:invalid`

Adding a `required` attribute on an `input` tag adds 3 psuedo-classes to an element: `:required`, `:valid` and `:invalid`. MDN explains it all really well [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Using_built-in_form_validation) but essentially this adds the most basic HTML5 validation to your input.

Adding `required` is important because it affects the way the CSS operates. One of the problems I had was keeping the floating label up top when I typed something but was no longer focused on that input. That's where the `:valid` pseudo-class comes in. If there is anything in the input, it will show `valid`, unless it didn't meet some other criteria.

🚨You cannot use the `.fl-regular` class on something like an input that has `type="email"` because you can have text inputted but it can still be invalid. So, you would have to do something similar to a `.fl-not-required` class.

That's where `:placeholder-shown` comes in.

---

### Alternatives like `:placeholder-shown`

When you don't have a `required` attribute you cannot validate the input, so you can't test against `:valid`. The only (CSS-only) solution I've found would be to test against `:placeholder-shown`. I guess you can use other attributes in the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) and/or JavaScript, but that's a whole other thing. I couldn't find anything that says it's bad to have am empty placeholder, but I am going to assume it is.

By using `:placeholder-shown` and `:not(:placeholder-shown)` we can effective do the same thing as `:valid` and `:invalid` for text input.

---

### Using `box-shadow` in place of `border`

I was actually watching a [tutorial](https://www.youtube.com/watch?v=TZRSXNc0T1k) this morning that talked about how `box-shadow` is not part of the box model and therefore does not add to the dimensions of an element the way padding, margin, or border would. So, to add a `border-bottom: 1px solid black` without actually adding 1px to the dimensions, you could write something like `box-shadow: 0px 1px 0px black`. I'm usually not into hacks like this, but it seemed much easier than trying to offset it with negative margins or using transform in a transition, and I'm really not sure what negative effects it has on acessibilty tbh.

---

### Using `user-select: none;`

Simply put, this makes text unselectable. There is some other stuff you can do with `user-select` that doesn't have full browser support yet, but `none` is fully supported. Here are the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select) and the [caniuse link](https://caniuse.com/#search=user-select) for more information.

I felt this was important to use for the labels so users can't double click to select this text, and would only be able to select text in the input.

---

### General Sibling Combinator (`~`) & `:focus-within`

I realized it was pretty much impossible selecting the label while the input had focus if the label was above the input. I was wanting something like a "previous sibling selector" but it does not exist. You can mess with `flex-flow` but that isn't good for acessibility or document flow. The only thing I found were selectors to find next siblings like the [general sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) (`~`) and [adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) (`+`). I did however [consult the W3C](https://www.w3.org/WAI/tutorials/forms/labels/) and learned that can put the input above the label or really anywhere around, if you do it properly.

```html
<!-- This order doesn't work -->
<label for="regular">Regular</label>
<input id="regular" name="regular" type="text" required />

<!-- But this order does -->
<input id="regular" name="regular" type="text" required />
<label for="regular">Regular</label>
```

Alternatively you can nest the input inside the label and use `:focus-within`. This psuedo-class is used for finding focus on any child within the parent, which is super helpful!

```html
<!-- This could also work -->
<label for="regular"
  >Regular
  <input id="regular" name="regular" type="text" required />
</label>
```

So if the input nested inside the label, I could do something like this:

```css
/* if any focus is detected inside of label */
label:focus-within {
  font-size: 0.5em;
  transform: translateY(-1.5em) translateX(1em);
}
```

instead of this:

```css
/* sibling of an input with focus */
input:focus ~ label {
  font-size: 0.5em;
  transform: translateY(-1.5em) translateX(1em);
}
```

---

## Conclusion

It definitely was not as easy as I thought it was going to be, and I ended up doing much more research than I anticipated, but in the end it was defintely worth it. And although every variation has something different to solve, there are still solutions that are CSS-only and still accessible.

[codepen link](https://codepen.io/buildingsareheavy/pen/poopeKd)
