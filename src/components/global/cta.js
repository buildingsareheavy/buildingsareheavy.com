import React from 'react'
// import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'

const CTAContainer = styled.div`
    padding: ${rhythm(1.5)};
    text-align: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    // background-image: url('${props => props.bg}')
`

const CTA = props => (
  <CTAContainer
    style={{
      backgroundImage: `url(${props.bg})`,
    }}
  >
    {/* props.bg is not working inside styled component CSS  */}
    {props.content}
  </CTAContainer>
)

export default CTA
