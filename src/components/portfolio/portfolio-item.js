import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import styled from 'styled-components'
import Img from 'gatsby-image'

import AnimatingMuseums from './assets/animating-museums.jpg'

const PortfolioItem = props => (
  <div
    className="portfolio-post"
    // more styles in style.scss
  >
    <div>
      <h3>{props.title}</h3>

      <p>{props.descriptionOne}</p>
      <p>{props.descriptionTwo}</p>
    </div>
    <img className="portfolio-image" src={props.image} alt={props.imageText} />
  </div>
)

export default PortfolioItem
