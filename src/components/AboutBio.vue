<template>
  <div class="about__bio">
    <div>ABOUT</div>

    <div>
      <p>
        My name is Ethan Bradford Barrett and I'm a front-end web developer and designer based in Denver, CO, USA. You can view my
        <g-link to="/">full CV here</g-link>.
      </p>
      <p>I studied at Rocky Mountain College of Art + Design, majoring in Fine Arts, with an emphasis in Photo / Video and Sculpture.</p>
    </div>

    <div>
      <g-image src="../assets/images/portrait.jpg"></g-image>
    </div>

    <div>
      <h3>Key Skills</h3>
      <ul>
        <li>Front-End Development</li>
        <li>Graphic and Web Design</li>
      </ul>
    </div>

    <div>
      <h3>Technical Skills</h3>
      <ul>
        <li>
          <span>CMS:</span> NetlifyCMS, Squarespace, Wordpress
        </li>
        <li>
          <span>Design Tools:</span> Figma, Illustrator, Photoshop, Sketch
        </li>
        <li>
          <span>Frameworks:</span> Bootstrap, Divi, React, Vue
        </li>
        <li>
          <span>Scripting Languages:</span> Javascript, PHP
        </li>
        <li>
          <span>Version Control:</span> Git, Github, Bitbucket
        </li>
        <li>
          <span>Other Skills:</span> AJAX, CSS, Gulp, HTML5, JQuery, JSON, REST API, Sass, XML
        </li>
      </ul>
    </div>

    <div>
      <div class="cta-container__bio">
        <g-link to="/portfolio">View Portfolio</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <style lang="scss">
.about {
  @media screen and (min-width: 768px) {
    &__bio {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr 1fr 2fr;
      background-image: url("../assets/images/bio-background.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;

      div {
        padding: 1rem;
        margin: 10px;
      }
      div:nth-child(1) {
        // About
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      div:nth-child(2) {
        // Bio text
        grid-column: 2 / 7;
        grid-row: 1 / 2;
        border-bottom: solid 1px black;
        p {
          margin: auto 1rem;
        }
      }
      div:nth-child(3) {
        // Portrait Image
        grid-column: 5 / 7;
        grid-row: 2 / 4;
        align-self: center;
        img {
          clip-path: polygon(
            23% 6%,
            11% 33%,
            2% 70%,
            5% 88%,
            72% 99%,
            93% 89%,
            94% 53%,
            96% 13%,
            81% 3%
          );
        }
      }
      div:nth-child(4) {
        // Key Skills
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        align-self: center;
      }
      div:nth-child(5) {
        // Technical Skills
        grid-column: 2 / 5;
        grid-row: 3 / 4;
        align-self: center;
      }
      div:nth-child(6) {
        // View Portfolio
        grid-column: 3 / 5;
        grid-row: 2 / 3;
        align-self: center;
        font-family: monospace;
      }
    }
  }
}
ul {
  list-style: outside none none;
  li {
    border-bottom: 1px solid var(--border-color);
    &:last-child {
      border: none;
    }
  }
  span {
    font-weight: bold;
  }
}
.cta-container__bio {
  background-image: url("../assets/images/cta-bio.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
</style>
