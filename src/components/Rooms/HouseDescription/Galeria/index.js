import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {
    const house01 = this.props.data.house01.sizes
    const house02 = this.props.data.house02.sizes
    const house03 = this.props.data.house03.sizes
    const house04 = this.props.data.house04.sizes
    const house05 = this.props.data.house05.sizes
    const house06 = this.props.data.house06.sizes
    
    return (
      <Col xs={12} md={6} className="Galeria">
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={house01} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={house06} />
          </Col>
          <Col xs={6}>
            <Img sizes={house04} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={house03} />
          </Col>
          <Col xs={6}>
            <Img sizes={house05} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
