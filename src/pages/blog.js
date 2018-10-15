import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'


class BlogPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
      Blog page goes here....
      </Layout>
    )
  }
}

export default BlogPage
