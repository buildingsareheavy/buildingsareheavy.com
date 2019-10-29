<template>
  <section class="about__skills">
    <h1 class="underline">Skills</h1>
    <details open>
      <summary>
        <h2>Key Skills</h2>
      </summary>
      <h3>Front-End Web Development</h3>
      <p>I special in an inclusive approach to web development, meaning responsive and performance-first development. I use semantic HTML and progressive enhancements in CSS and JavaScript to ensure the best experience and accessibility.</p>
      <h4 class="bold">What does that mean to you?</h4>
      <p>That means I use best practices for the web to increase SEO (search engine optimiziation), faster page speeds, backwards compatiblitity, and overall better experience for your users.</p>

      <h3>Team Management, Leadership, and Consultancy</h3>
      <p>I have experience in training and Whether it's one-on-one or corporate meetings, I focus on delivering the goals to ensure a diverse, and smooth working experience in your business.</p>

      <h3>Graphic and Web Design</h3>
      <p>
        I come from an art and design background which means you getting the best of both worlds:
        <span
          class="bold"
        >technology and design</span>. I strive to build something that is not only beautiful but functional for all users.
      </p>
    </details>

    <details>
      <summary>
        <h2>Technical Skills</h2>
      </summary>
      <p>CMS: NetlifyCMS, Squarespace, Wordpress</p>
      <p>Design Tools: Figma, Illustrator, Photoshop, Sketch</p>
      <p>Frameworks: Bootstrap, Divi, React, Vue</p>
      <p>Scripting Languages: Javascript, PHP</p>
      <p>Version Control: Git, Github, Bitbucket</p>
      <p>Other Skills: AJAX, CSS, Gulp, HTML5, JQuery, JSON, REST API, Sass, XML</p>
    </details>

    <details>
      <summary>
        <h2>Tools of Choice</h2>
      </summary>
      <p>Testing</p>
    </details>
  </section>
</template>

<script>
export default {
  name: "about-skills"
};
</script>

<style lang="scss">
.about {
  &__skills {
    details {
      border-bottom: 1px solid var(--text-color-muted);
      summary {
        cursor: pointer;
        display: inline-block; // gets rid of old marker & doesn't span entire width
        h2 {
          &::before {
            content: "\279C";
            display: inline-block;
            transition: 0.5s;
            margin-right: 0.5rem;
          }
        }
      }
      h3 {
        margin-top: 2rem;
        &:nth-child(2) {
          margin-top: 0;
        }
      }
      h3,
      h4 {
        margin-bottom: -1rem;
      }
    }

    details[open] {
      summary {
        h2 {
          &::before {
            transform: rotate(90deg);
          }
        }
        & ~ * {
          animation: open 1.5s ease-in-out;
        }
      }
    }
    @keyframes open {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>