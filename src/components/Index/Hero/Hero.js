import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import HeroImage from '../../../img/home/hero/hero.jpg'

import Logo from '../../../img/logo.svg'

import './Hero.sass'

var heroStyle = {
  backgroundImage: `url(${HeroImage})`
};


class Hero extends Component {
  render() {
    return (
      <Row className="show-grid" className="Hero" >
        <Col xs={12}>
          <h1>
            Go wild <br /> and drop it
          </h1>
        </Col>
      </Row>
    )
  }
}

export default Hero
