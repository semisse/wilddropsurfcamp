import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Index/Navigation/Navigation'
import Hero from '../components/Index/Hero/Hero'
import Welcome from '../components/Index/Welcome/Welcome'
import Rooms from '../components/Index/Rooms/Rooms'
import ThingsToDo from '../components/Index/ThingsToDo/ThingsToDo'
import About from '../components/Index/About/About'
import Social from '../components/Index/Social/Social'
import Map from '../components/Index/Map/Map'
import Contacts from '../components/Index/Contacts/Contacts'
import Footer from '../components/Index/Footer/Footer'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import WebFont from 'webfontloader'

import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.min.css'
import './index.sass'

class TemplateWrapper extends Component {
  
  componentDidMount = () => {
    WebFont.load({
      typekit: {
        id: 'ojv8ltq'
      }
    });
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
        <Grid>
          <Row>
            <Navigation />
          </Row>
          <div id="page-wrap">
            <Row>
              <Hero />
            </Row>
            <Row>
              <Welcome />
            </Row>
            <Row>
              <Rooms />
            </Row>
            <Row>
              <ThingsToDo />
            </Row>
            <Row>
              <About />
            </Row>
            <Row>
              <Social />
            </Row>
            <Row>
              <Map />
            </Row>
            <Row>
              <Contacts />
            </Row>
            <Row>
              <Footer />
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
