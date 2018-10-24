import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this, 'props.data.site.siteMetadata.description')
const posts = get(this, 'props.data.allMarkdownRemark.edges')

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

        {get(this, 'props.data.allMarkdownRemark.edges').map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div
              className="portfolio-post"
              // more styles in style.scss
              style={{
                paddingTop: rhythm(1.25),
                paddingBottom: rhythm(1.25),
              }}
              key={node.fields.slug}
            >
              <div>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 8),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.portfolioTag}</small>
                <p
                  style={{
                    marginTop: rhythm(1 / 4),
                    marginBottom: rhythm(1 / 2),
                  }}
                >
                  {node.frontmatter.subtitle}
                </p>
                {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
              </div>
              <Link className="portfolio-image" to={node.fields.slug}>
                <Img sizes={node.frontmatter.featImage.childImageSharp.sizes} />
              </Link>
            </div>
          )
        })}
        <br />
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

export const portfolioQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___portfolioOrder], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, portfolio: { eq: true } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            published
            portfolio
            portfolioOrder
            portfolioTag
            featImage {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
