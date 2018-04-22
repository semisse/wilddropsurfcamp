import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {
    const surf01 = this.props.data.surf01.sizes
    return (
      <Col xs={12} md={6} mdPull={6} className="Galeria">
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={surf01} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
