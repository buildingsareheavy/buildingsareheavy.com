import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import { GlobalCSSVariables } from '../components/global/global-styles-variables'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this, 'props.data.site.siteMetadata.description')
// const posts = get(this, 'props.data.allMarkdownRemark.edges')

const BlogContainer = styled.div`
  h2 {
    margin-bottom: ${rhythm(1 / 2)};
  }
  div.blog-post {
    padding-top: ${rhythm(1.25)};
    padding-bottom: ${rhythm(1.25)};
    h3 {
      margin-bottom: ${rhythm(1 / 8)};
    }
    a {
      box-shadow: none;
      color: ${GlobalCSSVariables.black};
    }
    p {
      margin-top: ${rhythm(1 / 4)};
      margin-bottom: ${rhythm(1 / 2)};
    }
  }
`

class BlogPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <BlogContainer>
          <h2>Blog</h2>

          {/* it should be: "posts.map(({ node }) =>" but for some reason it isn't accepting any variable */}
          {get(this, 'props.data.allMarkdownRemark.edges').map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div className="blog-post" key={node.fields.slug}>
                <div>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p>{node.frontmatter.subtitle}</p>
                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
                <Link className="blog-image" to={node.fields.slug}>
                  <Img
                    sizes={node.frontmatter.featImage.childImageSharp.sizes}
                  />
                </Link>
              </div>
            )
          })}
          <br />
          <p className="end">End</p>
        </BlogContainer>
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
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
