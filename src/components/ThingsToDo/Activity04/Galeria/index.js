import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {
    const horseriding01 = this.props.data.horseriding01.sizes
    return (
      <Col xs={12} md={6} className="Galeria">
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={horseriding01} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
