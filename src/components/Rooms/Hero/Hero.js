import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './Hero.sass'

import HeroImage from '../../../img/rooms/hero.jpg'

var heroStyle = {
  backgroundImage: `url(${HeroImage})`
};

class Hero extends Component {
  render() {
    return (
      <Row className="show-grid" className="Hero" style={heroStyle}>
        <Col xs={12}>
          <h1>
            Check<br />out<br />the place
          </h1>
          <h2>
            Because you also <br />need to rest
          </h2>
        </Col>
      </Row>
    )
  }
}

export default Hero
