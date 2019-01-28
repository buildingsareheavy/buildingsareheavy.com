import styled, { injectGlobal } from 'styled-components'

injectGlobal`
$linkColor: #222;



html {
  height: 100%;
}

body {
  background: #fff;
  min-height: 100%;
  position: relative;
  padding-bottom: 150px;
}

footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 130px;
}

a {
  box-shadow: none;
  text-decoration: none;
  color: $linkColor;
  transition: all 0.2s;
  &:hover {
    opacity: 0.75;
  }
}

p {
  a {
    color: blue;
  }
}

ul {
  list-style: none;
  li {
    margin-bottom: 0;
  }
}

// Blog & Portfolio pages

.blog-post,
.portfolio-post {
  border-bottom: 1px solid black;
}

@supports (display: grid) {
  div.blog-post,
  div.portfolio-post {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 2fr 3fr;
    // .blog-cell {
    //     display: flex;
    // }
    .blog-image,
    .portfolio-image {
      flex: 1 0 auto;
      order: -1;
    }
  }
  @media screen and (max-width: 767px) {
    div.blog-post,
    div.portfolio-post {
      display: block;
    }
  }
}

// About > section-bio

@supports (display: grid) {
  div.grid-bio {
    .cell {
      padding: 1.5rem 0;
    }
  }
  .bio-cta {
    div {
      padding-top: 55px;
      padding-right: 22px;
    }
  }
  @media screen and (min-width: 768px) {
    div.grid-bio {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr 1fr 2fr;
      .cell {
        padding: 1rem;
        margin: 10px;
      }
      .cell:nth-child(1) {
        // About
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      .cell:nth-child(2) {
        // Bio text
        grid-column: 2 / 7;
        grid-row: 1 / 2;
        border-bottom: solid 1px black;
        p {
          margin: auto 1rem;
        }
      }
      .cell:nth-child(3) {
        // Portrait Image
        grid-column: 5 / 7;
        grid-row: 2 / 4;
        align-self: center;
      }
      .cell:nth-child(4) {
        // Key Skills
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        align-self: center;
      }
      .cell:nth-child(5) {
        // Technical Skills
        grid-column: 2 / 5;
        grid-row: 3 / 4;
        align-self: center;
      }
      .cell:nth-child(6) {
        // View Portfolio
        grid-column: 3 / 5;
        grid-row: 2 / 3;
        align-self: center;
        font-family: monospace;
      }
    }
  }
}

// About > section-connect

@supports (display: grid) {
  div.grid-connect {
    .cell {
      li {
        font-family: monospace;
      }
    }
  }
  // on desktop
  @media screen and (min-width: 768px) {
    div.grid-connect {
      display: grid;
      grid-template-columns: 2fr 1fr;
      .cell:nth-child(2) {
        width: 100%;
        align-self: center;
      }
    }
  }
  // on tablets
  @media screen and (max-width: 767px) {
    div.grid-connect {
      .cell:nth-child(2) {
        ul {
          padding: 20px;
          margin-right: 50px;
          li {
            margin: 0 auto;
            max-width: 120px;
          }
        }
      }
    }
  }
}

`
