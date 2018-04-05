import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Grid, Row, Col } from 'react-bootstrap'

import './About.sass'

export default class About extends Component {
  render() {
    return (
      <Row className="About">

        <Col xs={12} md={6} className="image">
          <Img sizes={this.props.data.AboutMe.sizes} />
        </Col>

        <Col xs={12} md={6} className="text">
          <h2>
            Nice to <br /> meet you!
          </h2>
          <p>
            My name is Edgar and amet wolf asymmetrical blog 3 wolf moon. Cliche tacos wolf squid. Asymmetrical photo booth coloring book selfies taiyaki whatever tofu etsy vexillologist next level tousled green juice. 
          </p>
        </Col>
      </Row>
    )
  }
}
