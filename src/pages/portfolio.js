import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import PortfolioItem from '../components/portfolio/portfolio-item'

const siteTitle = get(this, 'props.data.site.siteMetadata.title')
const siteDescription = get(this, 'props.data.site.siteMetadata.description')

// Import images
import AnimatingMuseums from '../components/portfolio/assets/animating-museums.jpg'
import CentralFlorida from '../components/portfolio/assets/central-florida-smiles.jpg'
import ClaremontRanch from '../components/portfolio/assets/claremont-ranch.jpg'
import FreshStudio23 from '../components/portfolio/assets/fresh-studio-23.jpg'
import GoneCamping from '../components/portfolio/assets/gone-camping-rv.jpg'
import LoopDental from '../components/portfolio/assets/loop-dental.jpg'
import MFCstudio from '../components/portfolio/assets/my-favourite-colour-studio.jpg'
import PureSmiles from '../components/portfolio/assets/pure-smiles.jpg'
import ScaglioneHardwood from '../components/portfolio/assets/scaglione-hardwood-flooring.jpg'
import WithFoodAndLove from '../components/portfolio/assets/with-food-and-love.jpg'

const TechSkill = props => (
  <li>
    <span>{props.label}: </span>
    {props.list}
  </li>
)

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <h2 style={{ marginBottom: rhythm(1 / 2) }}>Portfolio</h2>
        <PortfolioItem
          title="MCA Denver: Animating Museums Website"
          // descriptionOne="The &quot;Museum of Contemporary Art Denver&quot; (MCA Denver) created &quot;Animating Museums&quot; and selected fourteen fellows from art museums across the United States for a two-year program, residency workshop, ongoing mentorship and group project."
          // descriptionTwo="For this project I designed an website with an accompanying blog."
          image={AnimatingMuseums}
          linkURL="http://animatingmuseums.org/"
          linkName="animatingmuseums.org"
        />
        <PortfolioItem
          title="Central Florida Smiles"
          descriptionOne=""
          descriptionTwo=""
          image={CentralFlorida}
          linkURL="https://centralfloridasmiles.com/"
          linkName="centralfloridasmiles.com"
        />
        <PortfolioItem
          title="Claremont Ranch"
          descriptionOne=""
          descriptionTwo=""
          image={ClaremontRanch}
          linkURL="https://claremontranchvet.com/"
          linkName="claremontranchvet.com"
        />
        <PortfolioItem
          title="Fresh Studio 23"
          descriptionOne=""
          descriptionTwo=""
          image={FreshStudio23}
          linkURL="//freshstudio23.com/"
          linkName="freshstudio23.com"
        />
        <PortfolioItem
          title="Gone Camping RV"
          descriptionOne=""
          descriptionTwo=""
          image={GoneCamping}
          linkURL="//gonecampingrv.com/"
          linkName="gonecampingrv.com"
        />
        <PortfolioItem
          title="Loop Dental"
          descriptionOne=""
          descriptionTwo=""
          image={LoopDental}
          linkURL="https://loopdentalmn.com/"
          linkName="loopdentalmn.com"
        />{' '}
        <PortfolioItem
          title="MFC Studio"
          descriptionOne=""
          descriptionTwo=""
          image={MFCstudio}
          linkURL="http://www.mfcstudio.com/"
          linkName="mfcstudio.com"
        />{' '}
        <PortfolioItem
          title="Pure Smiles"
          descriptionOne=""
          descriptionTwo=""
          image={PureSmiles}
          linkURL="https://puresmiles.com/"
          linkName="puresmiles.com"
        />{' '}
        <PortfolioItem
          title="Scaglione Hardwood Flooring"
          descriptionOne=""
          descriptionTwo=""
          image={ScaglioneHardwood}
          linkURL="http://www.scaglionehardwood.com/"
          linkName="scaglionehardwood.com"
        />
        <PortfolioItem
          title="With Food + Love"
          descriptionOne=""
          descriptionTwo=""
          image={WithFoodAndLove}
          linkURL="https://withfoodandlove.com/"
          linkName="withfoodandlove.com"
        />{' '}
        <br />
        <p style={{ textAlign: 'center' }}>END</p>
      </Layout>
    )
  }
}

export default PortfolioPage
