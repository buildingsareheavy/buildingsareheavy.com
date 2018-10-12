import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import './index.scss'
import styled from 'styled-components'

// Start styled components

const NavTitle = styled.h1`
margin-bottom: ${rhythm(1.5)};
margin-top: 0;
${scale(1.5)};
a {
  color: inherit;
}
`

const MainContainer = styled.div`
margin: 0 auto;
max-width: ${rhythm(36)};
padding: ${rhythm(1.5)} ${rhythm(3 / 4)} 0;
`

const Footer = styled.footer`
text-align: center;
background: black;
padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
color: beige;
p {
  margin: 0 auto;
}
`

// End styled components



class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let header
      header = (
        <NavTitle>
          <Link to={'/'}>
            Buildings Are <br /> Heavy
          </Link>
        </NavTitle>
      )

    let year;
    year = new Date().getFullYear();

    let footer
      footer = (
        <Footer className="footer">
          <p>Buildings Are Heavy &copy; {year}</p>
          <p>All Rights Reserved</p>
        </Footer>
      )
    
    return (
      <MainContainer  className="content">
        {header}
        {children}
        {footer}
      </MainContainer>
    )
  }
}

export default Template
