import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

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
      
      
      Other content goes here....


        {/* it should be: "posts.map(({ node }) =>" but for some reason it isn't accepting a variable */}
        {get(this, 'props.data.allMarkdownRemark.edges').map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h2
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
