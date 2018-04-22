import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {
    const dorms01 = this.props.data.dorms01.sizes
    const dorms02 = this.props.data.dorms02.sizes
    const dorms03 = this.props.data.dorms03.sizes
    const dorms04 = this.props.data.dorms04.sizes
    const dorms05 = this.props.data.dorms05.sizes
    return (
      <Col xs={12} md={6} className="Galeria">
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={dorms01} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={dorms02} />
          </Col>
          <Col xs={6}>
            <Img sizes={dorms03} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={dorms04} />
          </Col>
          <Col xs={6}>
            <Img sizes={dorms05} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
