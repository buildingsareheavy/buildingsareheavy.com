import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import CTA from '../global/cta'
import BioBackground from './assets/bio-background.svg'
import ViewPortfolio from './assets/view-portfolio.svg'
import Portrait from './assets/portrait3.jpg'

const BioContainer = styled.div`
  background: url('${BioBackground}') no-repeat center;
  background-size: 100% 100%;
  margin-top: -1px;
  padding: ${rhythm(1)};
  span {
    font-weight: 900;
  }
  a {
    color: #333;
  }
`

const KeySkillList = styled.ul`
  li {
    font-style: italic;
  }
`

const TechSkillList = styled.ul`
  li {
    font-style: italic;
    span {
      font-style: normal;
    }
  }
`
const BioImage = styled.img`
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
`

const TechSkill = props => (
  <li>
    <span>{props.label}: </span>
    {props.list}
  </li>
)

const BioSection = () => (
  <BioContainer className="grid-bio">
    <div className="cell">
      <h2
        style={{
          marginBottom: rhythm(1 / 2),
        }}
      >
        About
      </h2>
    </div>
    <div className="cell">
      <p
        style={{
          marginBottom: rhythm(1 / 2),
        }}
      >
        My name is Ethan Bradford Barrett and I'm a front-end web developer and
        designer based in Denver, CO, USA. You can view my{' '}
        <Link to="/cv/">full CV here</Link>.
      </p>
      <p>
        I studied at Rocky Mountain College of Art + Design, majoring in Fine
        Arts, with an emphasis in Photo / Video and Sculpture.
      </p>
    </div>
    <div className="cell">
      <BioImage src={Portrait} />
    </div>
    <div className="cell">
      <h3>Key Skills:</h3>
      <KeySkillList>
        <li>Front-End Development</li>
        <li>Graphic and Web Design</li>
      </KeySkillList>
    </div>
    <div className="cell">
      <h3>Technical Skills:</h3>
      <TechSkillList>
        <TechSkill label="CMS" list="Squarespace, Wordpress" />
        <TechSkill
          label="Design Tools"
          list="Figma, Illustrator, Photoshop, Sketch"
        />
        <TechSkill label="Frameworks" list="Bootstrap, Divi, React" />
        <TechSkill label="Scripting Languages" list="Javascript, PHP" />
        <TechSkill label="Version Control" list="Git, Github, Bitbucket" />
        <TechSkill
          label="Other Skills"
          list="AJAX, CSS, Gulp, HTML5, JQuery, JSON, REST API, Sass, XML"
        />
      </TechSkillList>
    </div>

    <div className="cell bio-cta">
      <CTA
        bg={ViewPortfolio}
        content={<Link to="/portfolio">View Portfolio</Link>}
      />
    </div>
  </BioContainer>
)

export default BioSection
