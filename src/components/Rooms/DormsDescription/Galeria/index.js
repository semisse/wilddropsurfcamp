import React, { Component } from 'react'
import Img from 'gatsby-image'
import {Grid, Row, Col } from 'react-bootstrap';

class Galeria extends Component {
  render() {
    const Images = this.props.data.allFile.edges
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6}>
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6}>
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
          <Col xs={6}>
            <Img sizes={Images[0].node.childImageSharp.sizes} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Galeria
