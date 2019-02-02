import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'

const NavContainer = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: ${rhythm(1.5)};
`

const NavTitle = styled.h1`
  border-right: 1px solid black;
  margin-left: ${rhythm(0.25)};
  margin-bottom: ${rhythm(0.25)};
  ${scale(1.5)};
  a {
    color: inherit;
  }
`

const NavItems = styled.ul`
  li {
    ${scale(0.4)};
    margin: 0 0 0 -5px;
  }
  a {
    color: inherit;
    display: inline;
    text-decoration: none;
    margin: 0 5px;
    padding: 5px 10px;
    &:hover {
      background: gold;
    }
  }
`

const NavHalf = styled.div`
  display: inline-block;
  :nth-child(1) {
    width: 50%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`

const Header = () => (
  // React fragments allow a component to return multiple elements
  <React.Fragment>
    <NavContainer style={{ color: 'black' }}>
      <NavHalf>
        <NavTitle>
          <Link to={'/'}>
            Buildings Are <br /> Heavy
          </Link>
        </NavTitle>
      </NavHalf>

      <NavHalf>
        <NavItems>
          <li>
            <Link to={'/'}>About</Link>
          </li>
          <li>
            <Link to={'/blog/'}>Blog</Link>
          </li>
          <li>
            <Link to={'/portfolio/'}>Portfolio</Link>
          </li>
        </NavItems>
      </NavHalf>
    </NavContainer>
  </React.Fragment>
)

export default Header
