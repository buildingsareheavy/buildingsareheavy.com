import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import CTA from '../global/cta'

const BioContainer = styled.div`
  border: 1px solid black;
  margin-top: -1px;
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
  <BioContainer>
    <h2
      style={{
        marginBottom: rhythm(1 / 2),
      }}
    >
      About
    </h2>
    <p>
      Ethan Bradford Barrett is a front-end web developer and designer.{' '}
      <Link to="/cv/">View full CV here</Link>.
    </p>
    <p>
      This is his biography. He studied at Rocky Mountain College of Art +
      Design, majoring in Fine Arts, with an emphasis in Photo / Video and
      Sculpture.
    </p>
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

    <CTA
      bg="https://via.placeholder.com/350x150"
      content={<Link to="/blog">View Portfolio</Link>}
    />

    <p>Profile photo goes below:</p>
    <img src="https://via.placeholder.com/350x150" />
  </BioContainer>
)

export default BioSection
