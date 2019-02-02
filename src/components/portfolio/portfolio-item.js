import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import Img from 'gatsby-image'

const PortfolioItem = props => (
  <div
    className="portfolio-post"
    // more styles in style.scss
  >
    <div>
      <h3>{props.title}</h3>
      <p>{props.descriptionOne}</p>
      <p>{props.descriptionTwo}</p>
      <a href={props.linkURL} target="_blank" rel="noopener">
        {props.linkName}
      </a>
    </div>
    <img
      style={{
        boxShadow: '0px 0px 5px 0px #ddd',
      }}
      className="portfolio-image"
      src={props.image}
      alt={props.title}
    />
  </div>
)

export default PortfolioItem
