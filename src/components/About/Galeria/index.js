import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {

    const about01 = this.props.data.about01.sizes
    const about02 = this.props.data.about02.sizes
    const about03 = this.props.data.about03.sizes
    const about04 = this.props.data.about04.sizes
    const about05 = this.props.data.about05.sizes
    
    
    return (
      <Col xs={12} className="Galeria">
        <Row className="show-grid">
          <Col xs={12} md={6} className="large">
            <Img sizes={about01} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={about02} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={about03} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={about04} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={about05} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
