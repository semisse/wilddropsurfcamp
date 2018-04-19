import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {
    const room01 = this.props.data.room01.sizes
    const room02 = this.props.data.room02.sizes
    const room03 = this.props.data.room03.sizes
    return (
      <Col xs={12} md={6} mdPull={6} className="Galeria">
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={room01} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={room02} />
          </Col>
          <Col xs={6}>
            <Img sizes={room03} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
