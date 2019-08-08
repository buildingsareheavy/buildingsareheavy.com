<template>
  <div class="home">
    <!-- TODO: FIX SVG IMPORT -->
    <object data="../assets/logo.svg" type="image/svg+xml">
      <img src="../assets/logo.svg" alt />
    </object>

    <h2>About</h2>
    <p>My name is Ethan Bradford Barrett and I'm a front-end web developer and designer based in Denver, CO, USA. You can view my full CV here.</p>
    <p>I studied at Rocky Mountain College of Art + Design, majoring in Fine Arts, with an emphasis in Photo / Video and Sculpture.</p>

    <details>
      <summary>Key Skills</summary>
      <p>Front-End Development</p>
      <p>Graphic and Web Design</p>
      <hr />
    </details>

    <router-link to="/blog">Blog</router-link>

    <details>
      <summary>Technical Skills</summary>
      <p>CMS: NetlifyCMS, Squarespace, Wordpress</p>
      <p>Design Tools: Figma, Illustrator, Photoshop, Sketch</p>
      <p>Frameworks: Bootstrap, Divi, React, Vue</p>
      <p>Scripting Languages: Javascript, PHP</p>
      <p>Version Control: Git, Github, Bitbucket</p>
      <p>Other Skills: AJAX, CSS, Gulp, HTML5, JQuery, JSON, REST API, Sass, XML</p>
    </details>

    <img src="../assets/portrait.jpg" alt="Profile" />
    <hr />

    <h3>Connect</h3>
    <p>
      When I post something on my
      <router-link to="/blog">blog</router-link>, I will make sure to share something about it on my
      <a
        href="https://www.instagram.com/buildingsareheavy/"
        target="_blank"
        rel="noopener"
      >Instagram</a>.
    </p>
    <p>
      I have all my most recent projects on my
      <a
        href="https://github.com/buildingsareheavy"
        target="_blank"
        rel="noopener"
      >Github</a>, as well as host my daily projects on
      <a
        href="https://codepen.io/buildingsareheavy/#"
        target="_blank"
        rel="noopener"
      >Codepen</a>.
    </p>
    <p>
      If you prefer email, you can always reach me at
      <a
        href="mailto:hello@buildingsAreHeavy.com"
      >Hello@BuildingsAreHeavy.com</a>
    </p>

    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/buildingsareheavy/"
          target="_blank"
          rel="noopener"
        >Instagram</a>
      </li>
      <li>
        <a href="https://github.com/buildingsareheavy" target="_blank" rel="noopener">Github</a>
      </li>
      <li>
        <a href="https://codepen.io/buildingsareheavy/#" target="_blank" rel="noopener">Codepen</a>
      </li>
      <li>
        <a href="mailto:hello@buildingsAreHeavy.com">Email</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
details {
  summary {
    cursor: pointer;
  }
}

details[open] summary ~ * {
  animation: sweep 0.75s ease-in-out;
}

@keyframes sweep {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

small img {
  height: 2rem;
  vertical-align: bottom;
}
</style>

