import React from 'react'
import { Link } from 'gatsby'
import Hero from './assets/hero.svg'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'

const HeroContainer = styled.div`
  height: 60vh;
  background: url('${Hero}') no-repeat center;
  background-size: contain;
  margin: ${rhythm(2)} auto;
`

const HeroSection = () => <HeroContainer />

export default HeroSection
