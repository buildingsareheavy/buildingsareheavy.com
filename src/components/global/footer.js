import React from 'react'
// import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import FooterSVG from './assets/footer-above.svg'

const FooterSticky = styled.footer`
  text-align: center;
  background: black;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  color: beige;
  ::before {
    content: '';
     background-image: url('${FooterSVG}');
  }
  p {
    margin: 0 auto;
  }
`

let year
year = new Date().getFullYear()

const Footer = () => (
  <FooterSticky className="footer">
    <p>Buildings Are Heavy &copy; {year}</p>
    <p>All Rights Reserved</p>
  </FooterSticky>
)

export default Footer
