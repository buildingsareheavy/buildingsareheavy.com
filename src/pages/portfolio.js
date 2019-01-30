import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import PortfolioItem from '../components/portfolio/portfolio-item'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this, 'props.data.site.siteMetadata.description')

import AnimatingMuseums from '../components/portfolio/assets/animating-museums.jpg'

const TechSkill = props => (
  <li>
    <span>{props.label}: </span>
    {props.list}
  </li>
)

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h2 style={{ marginBottom: rhythm(1 / 2) }}>Portfolio</h2>
        <p style={{ textAlign: 'center' }}>Coming Soon</p>
        {/* <PortfolioItem
          title="Test 1"
          descriptionOne="This is what the project is. This is more text to fill more than a line of text to see what it looks like....."
          descriptionTwo="This is what I did in the project."
          image={AnimatingMuseums}
          imageText="Alt Text"
        />

        <PortfolioItem
          title="Test 2"
          descriptionOne="This is what the project is."
          descriptionTwo="This is what I did in the project."
          image={AnimatingMuseums}
          imageText="Alt Text"
        /> */}

        <br />
        <p style={{ textAlign: 'center' }}>END</p>
      </Layout>
    )
  }
}

export default PortfolioPage
