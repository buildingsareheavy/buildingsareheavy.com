import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import PortfolioItems from '../components/portfolio/portfolio-items'
import styled from 'styled-components'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this, 'props.data.site.siteMetadata.description')

const PortfolioContainer = styled.div`
  h2 {
    margin-bottom: ${rhythm(1 / 2)};
  }
`

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <PortfolioContainer>
          <h2>Portfolio</h2>
          <PortfolioItems />
          <br />
          <p className="end">End</p>
        </PortfolioContainer>
      </Layout>
    )
  }
}

export default PortfolioPage
