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
          Hello, my name's Edgar and I will do my best to make you feel comfortable here. You have a wide range of activities and places to explore. I can advise and help you! Come alone or with a group and we can plan all the activities like surf lessons, yoga sessions or taste Portuguese gastronomy. Check out for more...
          </p>
        </Col>
      </Row>
    )
  }
}
