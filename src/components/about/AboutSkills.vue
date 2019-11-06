<template>
  <section class="about__skills">
    <h1 class="underline">Skills</h1>
    <details open>
      <summary>
        <h2>Key Skills</h2>
      </summary>
      <div class="about_skills-key">
        <h3>Front-End Web Development</h3>
        <p>I special in an inclusive approach to web development, meaning responsive and performance-first development. I use semantic HTML and progressive enhancements in CSS and JavaScript to ensure the best experience and accessibility.</p>
        <h4 class="bold">What does that mean to you?</h4>
        <p
          class="about__skills-break"
        >That means I use best practices for the web to increase SEO (search engine optimiziation), faster page speeds, backwards compatiblitity, and overall better experience for your users.</p>

        <h3>Team Management, Leadership, and Consultancy</h3>
        <p>Whether it is consulting businesses on best practices for their website, or training teams about technology and services, I have a proven track record of clear communication and effective management.</p>
      </div>
    </details>

    <details>
      <summary>
        <h2>List of Technical Skills</h2>
      </summary>
      <div class="about__skills-tech-item" v-for="skill in skills" :key="skill.title">
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.list }}</p>
      </div>
    </details>
    <details>
      <summary>
        <h2>Personal Setup</h2>
      </summary>
      <div class="about__skills-setup">
        <p class="subheading">
          A more complete description of my development envirornment can be found at
          <a
            href="https://ando.netlify.com/"
          >ando.netlify.com</a>
        </p>
        <p>
          I use
          <a href="https://hyper.is/">Hyper</a> as my terminal and
          <a href="https://code.visualstudio.com/">Visual Studio Code</a> as my IDE. Hyper is configured with an
          <a href="https://ohmyz.sh/">Oh-My-Zsh</a> setup and a
          <a href="https://github.com/romkatv/powerlevel10k">Powerlevel10K</a> theme, and both Hyper and VS Code use a color syntax theme called
          <a
            href="https://taniarascia.github.io/new-moon/"
          >New Moon</a>.
        </p>
        <p>
          I use
          <a href="https://app.programmingfonts.org/#dejavu">DejaVu Sans Mono</a> for my command-line font, because it has great glyph support, and
          <a
            href="https://app.programmingfonts.org/#victor-mono"
          >Victor Mono</a> for my text editor font. It supports ligatures and has a nice cursive italic font, similar to Dank Mono or Fira Code.
        </p>
        <p>
          My favorite browser is
          <a
            href="https://www.mozilla.org/en-US/firefox/developer/"
          >Firefox Developer Editon</a> because of it's excellent
          <a
            href="https://www.smashingmagazine.com/2019/10/guide-new-experimental-css-devtools-firefox/"
          >new DevTools</a> and security. I also have incredible respect for
          <a
            href="https://jensimmons.com/"
          >Jen Simmons</a> and the entire
          <a href="https://www.youtube.com/mozilladeveloper">Mozilla Developer</a> team.
        </p>
      </div>
    </details>
  </section>
</template>

<script>
import skillsJson from "@/data/about-skills.json";
export default {
  name: "about-skills",
  data() {
    return {
      skills: skillsJson
    };
  }
};
</script>

<style lang="scss">
.about {
  &__skills {
    details {
      border-bottom: 1px solid var(--text-color-muted);
      & div:last-child {
        padding-bottom: 2em;
      }
      summary {
        cursor: pointer;
        display: inline-block; // gets rid of old marker & doesn't span entire width
        &::-webkit-details-marker {
          display: none;
        }
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
        margin-top: 1em;
        &:nth-child(2) {
          margin-top: 0;
        }
      }
      h3,
      h4 {
        margin-bottom: -0.75em;
      }
    }
    p.about__skills-break {
      padding-bottom: 1.25em;
      border-bottom: 1px solid #eee;
    }
    &-setup {
      p.subheading {
        font-weight: bold;
        text-align: center;
        background: var(--grey);
        padding: 0.75em;
        border-radius: var(--radius);
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