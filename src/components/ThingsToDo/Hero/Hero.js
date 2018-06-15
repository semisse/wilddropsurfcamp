import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './Hero.sass'

import HeroImage from '../../../img/things-to-do/hero.jpg'

var heroStyle = {
  backgroundImage: `url(${HeroImage})`
};

class Hero extends Component {
  render() {
    return (
      <Row className="show-grid" className="Hero" style={heroStyle}>
        <Col xs={12}>
          <h1>
            FIND US,<br />DISCOVER<br />YOURSELF
          </h1>
          <h2>
            Our goal is to make your holiday special
          </h2>
        </Col>
      </Row>
    )
  }
}

export default Hero
