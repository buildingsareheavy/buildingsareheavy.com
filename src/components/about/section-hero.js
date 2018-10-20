import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'

const HeroContainer = styled.div`
  border: 1px solid black;
  height: 50vh;
  text-align: center;
  margin-top: -1px;
  p {
    padding-top: 22vh;
  }
`

const HeroSection = () => (
  <HeroContainer>
    <p>This is where the hero logo will go.</p>
  </HeroContainer>
)

export default HeroSection
