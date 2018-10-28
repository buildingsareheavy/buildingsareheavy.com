# This is a log of what I do each day / time I commit.

---

### 2018-10-28 > Sunday

Since SVG is supported universally now, I was totally overthinking the footer problem. I just made the whole background the SVG and it's good to go! So simple :)

I also added snytax for styled-components, becuase it was getting really annoying to only see everything in one color. #roughlife

---

### 2018-10-27 > Saturday

I did all the styling for the about page, and it's looking really nice. I still need to go back and do the mobile styling but hey, one step at a time. Also my CSS is kind of all over the place. I have some in styled components and some in scss and some in react style. I will clean that up soon when I refactor with proper components.

I think my brain is burnt because the only thing left to style is the footer. I need to add the SVG to it but `::before` isn't working. I mean I can get it to show, but it's not getting styled correctly.

I still need to rewrite the content for the about page, but it's just a few minor tweaks.

It's all coming along rather nicely. I am not going to worry about styling the first 3 blog posts or any of the portfolio pieces. At least not yet. I really want to get this thing live!

---

### 2018-10-23 > Tuesday

Finally added all the portfolio pages, but I still need to add better images (cough, gifs, cough) and text. I set up the `portfolio.js` based off of the `blog.js` layout and set up an `if` statement inside the `return()` on `blog-post.js`. It was actually super simple. I need to make it a component, but for now it's good to go.

Not much else to write about, I just need to keep plugging away. Next step is to review and solidify my CV to figure out exactly what is on the `about` page, and get this thing live. I need more writing for the portfolio items too.

---

### 2018-10-22 > Monday

I really didn't do anything for the project today. I did fix the author user.email on my local git so contributions showed up correctly which is a big win, and also added auto-formatting for Markdown, CSS, SCSS, PHP and HTML. It all feels really good to clean up shop, especially since I haven't really configured VSCode since I got this new MacBook, but I don't want to keep procrastinating. I can see the progress and know that it's not that much further to go to make this project live. I need to keep rolling, it's getting close.

---

### 2018-10-19 > Friday

I didn't have a lot of time to work today but last night I read up on _ESLint_ and _Prettier_ so I set up some basic configurations, like spacing, indentation, and double quotes to single quotes. So, I went back and reformatted everything, and it did clean up some things.

I also decided to remove the featured image on blog posts, becuase for some reason it doesn't make as much sense with this layout. Also if I am going to use the same templating for portfolio pieces it's just easier. (I know I can just write an if statement).

---

### 2018-10-18 > Thursday

Before I begin, I want to say that's weird that the site didn't deploy because there was one post that didn't have a `featImage` in the frontmatter (it was `/my-second-post`). I guess it's because I dont have any pages calling that page to throw me an error. So I guess, even though I dont have a direct link, the URL would still work and crash. That's really good, I guess just maybe difficult to track down.

---

### 2018-10-17 > Wednesday

I spent some time today struggling with adding a featured image to the blog page and getting it to show up. Finally I let go of what I thought I was doing and found [this article](https://codebushi.com/gatsby-featured-images/) that explained I need to also install [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) and use the `<Img />` component. Once I got that down, I was able to recreate the query I had in the old repo for all the new frontmatter info:

- subtitle (all)
- published (boolean)

- portfolio: (boolean)
  portfolioOrder: (interger)

I was able to create the blogQuery to say `portfolio: { eq: null }` so if I don't declare _portfolio_ at all, then it means it's a blog post :)

**Push #2**

I wanted to see what would happen if I pushed to the repo with errors on the dev environment to deploy and it failed, which is really good to know.

I had some trouble getting the `featImage` to show up but it turns out I was overthinking it. I looked at the source of [this article I previous mentioned](https://codebushi.com/gatsby-featured-images/) and it was all right there. I guess somewhere I misses some syntax for the GraphQL query, but anyways now it's working.

I haven't been that strict building out the blog backend, but I figured as long as I can get it built, and comment where necessary, I can refactor things to be a lot cleaner, once I go live. I don't want to keep stumbling over every single step and get stuck on build out for a month.

I also migrated all (It was only 15) blog posts with images over. It was more data entry and copy and pasting, but I got to rename images and add better alt tags, which got me thinking, "why didn't I write anything to accompany my photos?!" So I kind of want to go back and write some context, even if it's just for myself.

I couldn't figure out why the `featImage` wouldn't accept a gif file, but I will just add it to the growing list of things to go back and refactor. I also added some codepen iframes, which makes me wonder what Gatsby does with thier plugin regarding iframes. It also made me look back at my old codepen. I really need to fork them and consolidate everything together in one, becuase they still very much fit my aesthetic.

---

### 2018-10-15 > Monday

I moved `<Helmet>` from the index page to `layout.js`. I noticed it was getting called inside of `<Layout>` anyways, but... in the `blog-post.js` it also gets called and adds `${post.frontmatter.title}` to the title. I need to figure out how to write the proper `if` statement and then I can just incorporate `<Helmet>` inside `<Layout>`. Anyways, for now I just added `<Helmet>` to the _blog_ and _portfolio_ pages.

I cannot figure out how to add `props` inside the CSS of a styled component and then put that inside another component (see: `cta.js`), but it will work using react's `styled={{ }}`.

I also discovered how to create a component that is reusable inside other components and use props (example below is from `cta.js`).

```
const CTA = props => (
    <CTAContainer style={{
        backgroundImage: `url(${props.bg})`
    }}>
    {props.content}
    </CTAContainer>
  )
```

I also finished wireframing the homepage, and everything is functional. I need to make sure to import images as variables so React can read them.

Overall I had a few hiccups today, especially stumbling over components and figuring how to balance stuff with styled components, but I am getting there. Small strides everyday. As long as I keep a log of what to go back to, I can keep the momentum going, and that means I can feel good about things, and not feel overwhelmed.

---

### 2018-10-14 > Sunday

I refactored `layout.js` and created a `global` folder to include a separate `header.js` and `footer.js`.

I built out the main navigation and header, but it's proving difficult with making styled components. I know I can fix that problem with creating a set of variables and then make a media query for each component with said variables, but that's still repeating the query every time for every variable instead of just wrapping everything in a media query once via SCSS. It also seems like progressive enhancements are going to get convoluted easily.

---

### 2018-10-11 > Thursday

Today I deprecated the [original Gatsby site](https://github.com/buildingsareheavy/Buildings-Are-Heavy-deprecated-) and set up a fresh install of v2 with the Gatsby [starter blog](https://github.com/gatsbyjs/gatsby-starter-blog). It gave me a big leg up on my todo list, like adding `previous` and `next` links to the end of blog posts and setting up stuff for fonts and images that kind of went over my head intially. But after looking at the two different versions, it makes a lot more sense now.

Since the _starter blog_ repo was kind of a refactor of the original, some things were frustrating. Like `header.js` was incorporated into `layout.js` which was already set up differently. It took me a minute to figure out where everything was but it's really forcing me to look at how stuff is structured, which in the end is better.

In addition, I added _SCSS_ and _Styled Components_ to the project and am super excited about playing around with CSS-in-JS, especially since it made me want to rip out my hair in the beginning.

I had some difficulty with loading fonts into typography.js, especially since the docs are so slim, but it proved easier than I thought.

I cleaned up `components/layout.js` with _styled components_ and WOW, it makes stuff SOOO easy to read. Really feeling the React vibes rn (even tho it feels like Gatsby is to JS as WP is to PHP).

I am feeling really good about building out this site! I haven't _really_ gotten into too much component, props, and styled component stuff yet... but we all gotta start somewhere.

---

END
