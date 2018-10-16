import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this,'props.data.site.siteMetadata.description')


class PortfolioPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
      <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
      Portfolio page goes here....
      </Layout>
    )
  }
}

export default PortfolioPage
