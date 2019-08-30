import React, { Component } from 'react'
import PortfolioItem from './portfolio-item'

// Import images
import AnimatingMuseums from './assets/animating-museums.jpg'
import ClaremontRanch from './assets/claremont-ranch.jpg'
import GoneCamping from './assets/gone-camping-rv.jpg'
import IkonPass from './assets/ikon-pass.jpg'
import LoopDental from './assets/loop-dental.jpg'
import Matillion from './assets/matillion.jpg'
import MatthewSteele from './assets/matthew-steele.jpg'
import MFCstudio from './assets/my-favourite-colour-studio.jpg'
import PrimeDentalDesign from './assets/prime-dental-design.jpg'
import PureSmiles from './assets/pure-smiles.jpg'
import PutItOnTheBlog from './assets/put-it-on-the-blog.jpg'
import ScaglioneHardwood from './assets/scaglione-hardwood-flooring.jpg'
import SimpleYoutube from './assets/simple-youtube.jpg'
import WithFoodAndLove from './assets/with-food-and-love.jpg'

const PortfolioItems = props => (
  <div>
    <PortfolioItem
      title="Matillion"
      descriptionOne="Hired on as a consultant, I advised best practices and helped manage their Wordpress website more efficiently. I also assisted with redesign and development."
      descriptionTwo="“Matillion” is an award-winning cloud data software company. They provide end-to-end data transformation for Amazon Redshift, Snowflake, and Google BigQuery."
      image={Matillion}
      linkURL="https://www.matillion.com/"
      linkName="matillion.com"
    />
    <PortfolioItem
      title="Matthew Steele Plastic Surgery"
      descriptionOne="While working at “EOS Healthcare Marketing”, I redesigned a pre-existing site and developed an import pipeline to migrate large amount of data and images to a custom Wordpress website. The site was built using React, PHP, and Javascript."
      descriptionTwo="“Dr. Matthew H. Steele” is a plastic surgeon based in Fort Worth, specializing in cosmetic and reconstructive surgery."
      image={MatthewSteele}
      linkURL="https://drsteeleplasticsurgery.com/"
      linkName="drsteeleplasticsurgery.com"
    />
    <PortfolioItem
      title="Pure Smiles"
      descriptionOne="While working at “EOS Healthcare Marketing”, I developed a system to rapidly prototype Wordpress websites, and allow them to be templated and scalable."
      descriptionTwo="“Pure Smiles” is a new practice that provides advanced, comprehensive dentistry in Westerville, Ohio."
      image={PureSmiles}
      linkURL="https://puresmiles.com/"
      linkName="puresmiles.com"
    />
    <PortfolioItem
      title="IKON Pass"
      descriptionOne="I was asked to create designs and page templates for the IKON Pass blog “Lifted” to provide a more cohesive and consistent user experience. The designs were later developed into a Wordpress website."
      descriptionTwo="The “IKON Pass” is a ski and snowboard pass with over 40 destinations around the world."
      image={IkonPass}
      linkURL="https://lifted.ikonpass.com/"
      linkName="lifted.ikonpass.com"
    />
    <PortfolioItem
      title="With Food + Love"
      descriptionOne="An existing client site, built in Wordpress. I was tasked to redesign, rebrand, and recreate a new method of retrieving and displaying all the data for recipes and other blog posts."
      descriptionTwo="“With Food + Love” is a plant-based, gluten-free blog run by Sherrie Castellano, a contributing photographer, food writer and columnist for FEAST Magazine. She has worked with Absolut, Chobani, LaCroix, Silk, Simply Organics, Urban Outfitters, Better Homes and Gardens, and Livestrong, among others."
      image={WithFoodAndLove}
      linkURL="https://withfoodandlove.com/"
      linkName="withfoodandlove.com"
    />
    <PortfolioItem
      title="Put It On The Blog"
      descriptionOne="A personal project, written in Vue.js that uses the Airtable API to manage content and updates."
      descriptionTwo="“Put It On The Blog” is a community space where users can easily and anonymously submit quotes without needing to worry about login credentials."
      image={PutItOnTheBlog}
      linkURL="https://putitontheblog.co/"
      linkName="putitontheblog.co"
    />
    <PortfolioItem
      title="Prime Dental Design"
      descriptionOne="While working at “EOS Healthcare Marketing”, I was tasked with creating a fully custom Wordpress theme. The site was hand coded using Bootstrap 4, Advanced Custom Fields Pro, PHP and JavaScript."
      descriptionTwo="“Prime Dental Design” is a dental practice located in Central Florida, focusing on cosmetic and restorative dentistry."
      image={PrimeDentalDesign}
      linkURL="https://primedentaldesign.com/"
      linkName="primedentaldesign.com"
    />
    <PortfolioItem
      title="Simple Youtube"
      descriptionOne="A personal project, written in Vue.js that uses Vuetify, a “material design” library and the Youtube Data API to present a clean, colorful, and ad-free version of YouTube."
      descriptionTwo=""
      image={SimpleYoutube}
      linkURL="https://simpleyoutube.xyz/"
      linkName="simpleyoutube.xyz"
    />
    <PortfolioItem
      title="Loop Dental"
      descriptionOne="While working at “EOS Healthcare Marketing”, I was tasked to create a Wordpress site, based off a chosen theme and mockups created by the graphic design team."
      descriptionTwo="“Loop Dental” is a new dental practice located in the North Loop neighborhood of Minneapolis, Minnesota."
      image={LoopDental}
      linkURL="https://loopdentalmn.com/"
      linkName="loopdentalmn.com"
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
      title="MFC Studio"
      descriptionOne="A client website, I was tasked to create consistent branding with hundreds of store items, as well as curate featured collections of work that was both for sale and on display as fine art."
      descriptionTwo="Artists Franky + Annie Scaglione established “My Favourite Colour Studio” to honour and capture the aesthetics of nostalgia. From baseball to cross-country road trips, their inspirations and passion overlap in the preservation of our rich pastimes, celebrating all things classic."
      image={MFCstudio}
      linkURL="http://www.mfcstudio.com/right-to-roam"
      linkName="mfcstudio.com"
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
      title="Claremont Ranch"
      descriptionOne="While working at “EOS Healthcare Marketing”, I developed a system to rapidly prototype Wordpress websites, and allow them to be templated and scalable. This was the first site to utilize that system."
      descriptionTwo="“Claremont Ranch” is a vetrinary clinic located in Colorado Springs, Colorado."
      image={ClaremontRanch}
      linkURL="https://claremontranchvet.com/"
      linkName="claremontranchvet.com"
    />
    <PortfolioItem
      title="Scaglione Hardwood Flooring"
      descriptionOne="A new client, who requested I build thier site to reflect thier modern and elegant aesthetic, built in Squarespace."
      descriptionTwo="“Scaglione Hardwood Flooring” is an elite flooring company based in Denver, Colorado."
      image={ScaglioneHardwood}
      linkURL="http://www.scaglionehardwood.com/"
      linkName="scaglionehardwood.com"
    />
  </div>
)

export default PortfolioItems
