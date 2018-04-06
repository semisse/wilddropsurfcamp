import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './Hero.sass'

class Hero extends Component {
  render() {
    return (
      <Row className="show-grid" className="Hero">
        <Col xs={12}>
          <h1>
            Things<br />you dream<br />to do
          </h1>
          <h2>
            You can do them here.
          </h2>
        </Col>
      </Row>
    )
  }
}

export default Hero
