import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this,'props.data.site.siteMetadata.description')
const posts = get(this, 'props.data.allMarkdownRemark.edges')

class BlogPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <h2>Blog</h2>

        {/* it should be: "posts.map(({ node }) =>" but for some reason it isn't accepting any variable */}
        {get(this, 'props.data.allMarkdownRemark.edges').map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            
            <div 
            className="blog-post"
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
              <small>{node.frontmatter.date}</small>
              <p style={{
                marginBottom: rhythm(1 / 2),
              }}>{node.frontmatter.subtitle}</p>
              {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
              </div>
              <Link className="blog-image" to={node.fields.slug}>
              <Img sizes={node.frontmatter.featImage.childImageSharp.sizes} />
              </Link>
            </div>
            
          )
        })}
        <br/>
        <p style={{
          textAlign: "center"
        }}>END</p>

      </Layout>
    )
  }
}


export default BlogPage



export const blogQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], order: DESC 
      }
      filter: { 
        frontmatter: { 
            published: { eq: true } 
            portfolio: { eq: null }
          } 
      }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            subtitle
            published
            portfolio
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
