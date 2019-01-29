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
        <h2
          style={{
            marginBottom: rhythm(1 / 2),
          }}
        >
          Portfolio
        </h2>
        <PortfolioItem />
        <p
          style={{
            textAlign: 'center',
          }}
        >
          END
        </p>
      </Layout>
    )
  }
}

export default PortfolioPage
