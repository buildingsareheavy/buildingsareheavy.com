import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import './index.scss'
import styled from 'styled-components'

import GlobalStyles from './global/global-styles.js'
import Header from './global/header'
import Footer from './global/footer'

// Start styled components

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(36)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)} 0;
`

// End styled components

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <MainContainer className="content">
        <Header />
        {children}
        <Footer />
      </MainContainer>
    )
  }
}

export default Template
