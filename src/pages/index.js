import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import HeroSection from '../components/about/section-hero'
import BioSection from '../components/about/section-bio'
import ConnectSection from '../components/about/section-connect'

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <HeroSection />
        <BioSection />
        <ConnectSection />
      </Layout>
    )
  }
}

export default IndexPage
