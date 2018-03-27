import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Navigation from '../Index/Navigation/Navigation'
import Hero from '../Index/Hero/Hero'
import Welcome from '../Index/Welcome/Welcome'
import RoomsAndThings from '../Index/RoomsAndThings/RoomsAndThings'
import About from '../Index/About/About'
import SocialAndMap from '../Index/SocialAndMap/SocialAndMap'
import Map from '../Index/Map/Map'
import Contacts from '../Index/Contacts/Contacts'
import Footer from '../Index/Footer/Footer'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import WebFont from 'webfontloader'

import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.min.css'
import './index.sass'

class OuterContainer extends Component {
  componentDidMount = () => {
    WebFont.load({
      typekit: {
        id: 'ojv8ltq',
      },
    })
  }

  render() {
    return (
      <div id="outer-container">
        <Helmet
          title="Wild Drop"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigation />
        <div className="container-fluid" id="page-wrap">
          <Hero className="container-fluid" />

          <Welcome className="container-fluid" />

          <RoomsAndThings className="container" data={this.props.data} />

          <About className="container" data={this.props.data} />

          <SocialAndMap className="container" />

          <Contacts className="container-fluid" />

          <Footer className="container-fluid" />
        </div>
      </div>
    )
  }
}

export default OuterContainer
