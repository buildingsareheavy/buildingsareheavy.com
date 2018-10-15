# This is a log of what I do each day / time I commit.

---

## 2018-10-14 > Sunday

I refactored `layout.js` and created a `global` folder to include a separate `header.js` and `footer.js`.

I built out the main navigation and header, but it's proving difficult with making styled components. I know I can fix that problem with creating a set of variables and then make a media query for each component with said variables, but that's still repeating the query every time for every variable instead of just wrapping everything in a media query once via SCSS. It also seems like progressive enhancements are going to get convoluted easily.


---

## 2018-10-11 > Thursday

Today I deprecated the [original Gatsby site](https://github.com/buildingsareheavy/Buildings-Are-Heavy-deprecated-) and set up a fresh install of v2 with the Gatsby [starter blog](https://github.com/gatsbyjs/gatsby-starter-blog). It gave me a big leg up on my todo list, like adding `previous` and `next` links to the end of blog posts and setting up stuff for fonts and images that kind of went over my head intially. But after looking at the two different versions, it makes a lot more sense now.

Since the *starter blog* repo was kind of a refactor of the original, some things were frustrating. Like `header.js` was incorporated into `layout.js` which was already set up differently. It took me a minute to figure out where everything was but it's really forcing me to look at how stuff is structured, which in the end is better.

In addition, I added *SCSS* and *Styled Components* to the project and am super excited about playing around with CSS-in-JS, especially since it made me want to rip out my hair in the beginning.

I had some difficulty with loading fonts into typography.js, especially since the docs are so slim, but it proved easier than I thought. 

I cleaned up `components/layout.js` with *styled components* and WOW, it makes stuff SOOO easy to read. Really feeling the React vibes rn (even tho it feels like Gatsby is to JS as WP is to PHP).

I am feeling really good about building out this site! I haven't *really* gotten into too much component, props, and styled component stuff yet... but we all gotta start somewhere.

---

END