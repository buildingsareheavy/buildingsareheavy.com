import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this, 'props.data.site.siteMetadata.description')

import CVpdf from '../assets/cv.pdf'

const CVContainer = styled.div`
  h2 {
    margin-bottom: ${rhythm(1 / 2)};
  }
  .embed-responsive {
    /* position: relative; */
    display: block;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    border-bottom: 20px solid #3d3d3d;
  }
`

class CV extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <CVContainer>
          <h2>CV</h2>
          <div className="embed-responsive">
            <object
              data={CVpdf}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </div>
        </CVContainer>
      </Layout>
    )
  }
}

export default CV
