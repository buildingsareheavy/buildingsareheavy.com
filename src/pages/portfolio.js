import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'


class PortfolioPage extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
      Portfolio page goes here....
      </Layout>
    )
  }
}

export default PortfolioPage
