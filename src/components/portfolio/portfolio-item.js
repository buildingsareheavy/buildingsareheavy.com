import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PortfolioItemContainer = styled.div`
  hr {
    margin-top: ${rhythm(1)};
  }
  img {
    box-shadow: 0px 0px 5px 0px #ddd;
  }
  @media screen and (max-width: 701px) {
    div {
      margin-bottom: 30px;
    }
  }
`

const PortfolioItem = props => (
  <PortfolioItemContainer className="portfolio-post">
    <div>
      <h3>{props.title}</h3>
      <p>{props.descriptionOne}</p>
      <hr />
      <p>{props.descriptionTwo}</p>
      <a href={props.linkURL} target="_blank" rel="noopener">
        {props.linkName}
      </a>
    </div>
    <img className="portfolio-image" src={props.image} alt={props.title} />
  </PortfolioItemContainer>
)

export default PortfolioItem
