import React, { Component } from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './index.sass'

import Dorm01 from '../../../../img/rooms/dorms/dorm01.jpg'

class Galeria extends Component {
  render() {
    const Images = this.props.data.dorms.edges
    console.log(Images)
    return (
      <Col xs={12} md={6} className="Galeria">
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={Images[1].node.childImageSharp.sizes} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={Images[2].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6}>
            <Img sizes={Images[3].node.childImageSharp.sizes} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={Images[4].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6}>
            <Img sizes={Images[5].node.childImageSharp.sizes} />
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Galeria
