import React from 'react'
// import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import FooterSVG from './assets/footer-bg.svg'

const FooterSticky = styled.footer`
  text-align: center;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  background-image: url('${FooterSVG}');
  background-repeat: no-repeat;
  background-size: cover;
  p {
    margin: 0 auto;
    color: beige;
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
