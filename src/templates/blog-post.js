import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    let titleInfo
    titleInfo = <Fragment>{post.frontmatter.date}</Fragment>

    const BlogPostContainer = styled.div`
      div:first-child {
        text-align: center;
        small {
          display: block;
          margin-bottom: ${rhythm(1)};
          margin-top: ${rhythm(-1)};
        }
      }
      hr {
        background: black;
        margin-top: ${rhythm(1.5)};
      }
      .blog-content {
        hr {
          margin-bottom: ${rhythm(1)};
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          padding: 0;
        }
      }
    `

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <BlogPostContainer>
          <div>
            <h1>{post.frontmatter.title}</h1>
            <small>
              {/* {post.frontmatter.date} */}
              {titleInfo}
            </small>
            <p>{post.frontmatter.subtitle}</p>
          </div>
          <hr />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr />
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </BlogPostContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        subtitle
      }
    }
  }
`
