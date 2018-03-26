import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Navigation from '../Index/Navigation/Navigation'
import Hero from '../Index/Hero/Hero'
import Welcome from '../Index/Welcome/Welcome'
import Rooms from '../Index/Rooms/Rooms'
import ThingsToDo from '../Index/ThingsToDo/ThingsToDo'
import About from '../Index/About/About'
import Social from '../Index/Social/Social'
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
          <Navigation />
          <div className="container-fluid" id="page-wrap">
            <div >
                <Hero className="container-fluid" data={this.props.data} />
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
          </div>
        </div>
      )
    }
  }

export default OuterContainer
