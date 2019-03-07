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
import PutItOnTheBlog from '../components/portfolio/assets/put-it-on-the-blog.jpg'
import ScaglioneHardwood from '../components/portfolio/assets/scaglione-hardwood-flooring.jpg'
import SimpleYoutube from '../components/portfolio/assets/simple-youtube.jpg'
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
          title="Put It On The Blog"
          descriptionOne="A personal project, written in javascript that uses the Google Sheets API to manage content updates."
          descriptionTwo=""
          image={PutItOnTheBlog}
          linkURL="https://putitontheblog.co/"
          linkName="putitontheblog.co"
        />
        <PortfolioItem
          title="Pure Smiles"
          descriptionOne="While working at EOS, I developed a system to rapidly prototype Wordpress websites, and allow them to be templated and scalable."
          descriptionTwo="“Pure Smiles” is a new practice that provides advanced, comprehensive dentistry in Westerville, Ohio."
          image={PureSmiles}
          linkURL="https://puresmiles.com/"
          linkName="puresmiles.com"
        />
        <PortfolioItem
          title="With Food + Love"
          descriptionOne="An existing client site, built in Wordpress. I was tasked to redesigned, rebranded, and recreated a new method of retrieving and displaying all the data for recipes and other blog posts."
          descriptionTwo="“With Food + Love” is a plant-based, gluten-free blog run by Sherrie Castellano, a contributing photographer, food writer and columnist for FEAST Magazine. She has worked with Absolut, Chobani, LaCroix, Silk, Simply Organics, Urban Outfitters, Better Homes and Gardens, and Livestrong, among others."
          image={WithFoodAndLove}
          linkURL="https://withfoodandlove.com/"
          linkName="withfoodandlove.com"
        />
        <PortfolioItem
          title="Simple Youtube"
          descriptionOne="A personal project, written in Vue.js that uses the Youtube Data API to present a clean and colorful version of YouTube."
          descriptionTwo=""
          image={SimpleYoutube}
          linkURL="https://simpleyoutube.xyz/"
          linkName="simpleyoutube.xyz"
        />
        <PortfolioItem
          title="Loop Dental"
          descriptionOne="While working at “EOS Healthcare Marketing”, I was tasked to create a Wordpress site, based off a chosen theme and mockups created by the graphic designer."
          descriptionTwo="“Loop Dental” is a new dental practice located in the North Loop neighborhood of Minneapolis, Minnesota."
          image={LoopDental}
          linkURL="https://loopdentalmn.com/"
          linkName="loopdentalmn.com"
        />
        <PortfolioItem
          title="MCA Denver: Animating Museums"
          descriptionOne="A client website, built in Wordpress, with an intiuative backend for employees to update, and post to the blog. I was asked to capture and reflect the subtle and contemporary aesthetics of MCA Denver."
          descriptionTwo="“The Museum of Contemporary Art Denver” (MCA Denver) created “Animating Museums” to further cultivate the creativity of already creative people working in art museums. Fourteen fellows from art museums across the United States have been selected for the two-year program, which includes residency workshops in Denver, ongoing mentorship, and a group project."
          image={AnimatingMuseums}
          linkURL="http://animatingmuseums.org/"
          linkName="animatingmuseums.org"
        />
        <PortfolioItem
          title="Gone Camping RV"
          descriptionOne="A client website, built in Wordpress that houses online inventory of two RV dealerships. I built pipelines to connect thier deal management software to the database of the website, as well as export that data to classified sites, such as Craigslist."
          descriptionTwo="“Gone Camping RV” is an RV dealership with two locations in Evans and Greeley, Colorado, specializing in motor homes."
          image={GoneCamping}
          linkURL="//gonecampingrv.com/"
          linkName="gonecampingrv.com"
        />
        <PortfolioItem
          title="Fresh Studio 23"
          descriptionOne="A website using Wordpress, that documents 10 years of work Franky Scaglione has done with the “Fresh 23 Fashion Show” and his classroom, Studio 23."
          descriptionTwo="“FRESH 23” is an annual fashion show and multimedia event, celebrating high school artists in Wheat Ridge, CO. In 2008, twenty-three student artists teamed with Vans to create twenty-three pairs of shoe designs, and showcase their artwork. This partnership has been the nucleus of annual events to celebrate the Wheat Ridge High School artists, and initiated nationwide attention inspiring the Vans Custom Culture contest... now serving over 3,000 schools nationwide, as well as international equivalents throughout four continents."
          image={FreshStudio23}
          linkURL="//freshstudio23.com/"
          linkName="freshstudio23.com"
        />

        <PortfolioItem
          title="Claremont Ranch"
          descriptionOne="While working at “EOS Healthcare Marketing”, I developed a system to rapidly prototype Wordpress websites, and allow them to be templated and scalable. This was the first site to utilize that system."
          descriptionTwo="“Claremont Ranch” is a vetrinary clinic located in Colorado Springs, Colorado."
          image={ClaremontRanch}
          linkURL="https://claremontranchvet.com/"
          linkName="claremontranchvet.com"
        />
        <PortfolioItem
          title="Central Florida Smiles"
          descriptionOne="While working at “EOS Healthcare Marketing”, I was tasked with creating a fully custom Wordpress theme, based on the new branding direction of the practice. The site was hand coded using Bootstrap 4, Advanced Custom Fields Pro, and custom PHP and JavaScript."
          descriptionTwo="“Wiewiora & Dunn Orthodontics” is a oral surgery practice, located in Lake Mary and Longwood, Florida."
          image={CentralFlorida}
          linkURL="https://centralfloridasmiles.com/"
          linkName="centralfloridasmiles.com"
        />
        <PortfolioItem
          title="MFC Studio"
          descriptionOne="A client website, I was tasked to create consistent branding with hundreds of store items, as well as curate featured collections of work that was both for sale and on display as fine art."
          descriptionTwo="Artists Franky + Annie Scaglione established “My Favourite Colour Studio” to honour and capture the aesthetics of nostalgia. From baseball to cross-country road trips, their inspirations and passion overlap in the preservation of our rich pastimes, celebrating all things classic."
          image={MFCstudio}
          linkURL="http://www.mfcstudio.com/"
          linkName="mfcstudio.com"
        />
        <PortfolioItem
          title="Scaglione Hardwood Flooring"
          descriptionOne="A new client, who requested I build thier site to reflect thier modern and elegant aesthetic, built in Squarespace."
          descriptionTwo="“Scaglione Hardwood Flooring” is an elite flooring company based in Denver, Colorado."
          image={ScaglioneHardwood}
          linkURL="http://www.scaglionehardwood.com/"
          linkName="scaglionehardwood.com"
        />
        <br />
        <p style={{ textAlign: 'center' }}>END</p>
      </Layout>
    )
  }
}

export default PortfolioPage
