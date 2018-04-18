import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

class Galeria extends Component {
  render() {
    const Images = this.props.data.house.edges
    return (
      <Col xs={12} className="Galeria">
        <Row className="show-grid">
          <Col xs={12} md={6} className="large">
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6} md={3} className="small">
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
