import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import CTA from '../global/cta'
import BioBackground from './assets/bio-background.svg'
import ViewPortfolio from './assets/view-portfolio.svg'
import Portrait from './assets/portrait.jpg'

const BioContainer = styled.div`
  background: url('${BioBackground}') no-repeat center;
  background-size: 100% 100%;
  margin-top: -1px;
  padding: ${rhythm(1)};
  span {
    font-weight: 900;
  }
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
        Ethan Bradford Barrett is a front-end web developer and designer.{' '}
        <Link to="/cv/">View full CV here</Link>.
      </p>
      <p>
        This is his biography. He studied at Rocky Mountain College of Art +
        Design, majoring in Fine Arts, with an emphasis in Photo / Video and
        Sculpture.
      </p>
    </div>
    <div className="cell">
      <img src={Portrait} />
    </div>
    <div className="cell">
      <h3>Key Skills:</h3>
      <ul>
        <li>Front-end Development</li>
        <li>Graphic Design</li>
        <li>Sales</li>
      </ul>
    </div>
    <div className="cell">
      <h3>Technical Skills:</h3>
      <ul>
        <TechSkill label="OS" list="MacOS, Linux" />
        <TechSkill label="Scripting Languages" list="Javascript, PHP" />
        <TechSkill label="Versio Control" list="Git, Github, Bitbucket" />
        <TechSkill label="Frameworks" list="Bootstrap, Divi, React" />
        <TechSkill label="Other Skills" list="CSS, Sass, JQuery, AJAX" />
        <TechSkill
          label="Design Tools"
          list="Photoshop, Illustrator, Figma, Sketch"
        />
      </ul>
    </div>

    <div className="cell">
      <CTA
        bg={ViewPortfolio}
        content={<Link to="/portfolio">View Portfolio</Link>}
      />
    </div>
  </BioContainer>
)

export default BioSection
