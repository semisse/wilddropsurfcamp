import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {
    const paredes01 = this.props.data.paredes01.sizes
    const paredes02 = this.props.data.paredes02.sizes
    const paredes03 = this.props.data.paredes03.sizes
    const paredes04 = this.props.data.paredes04.sizes
    const paredes05 = this.props.data.paredes05.sizes

    return (
      <Col xs={12} md={6} className="Galeria">
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={paredes04} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={paredes02} />
          </Col>
          <Col xs={6}>
            <Img sizes={paredes03} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={paredes01} />
          </Col>
          <Col xs={6}>
            <Img sizes={paredes05} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
