import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'

import './Content.sass'

class Content extends Component {
  render() {
    const data = this.props.data
    return (
      <Row className="ContentRow">
        <Col xs={12} md={6} className="image">
            <Img sizes={data.AboutMe.sizes} />
        </Col>
        <Col xs={12} md={5} className="content">
            <h1>Hey dude!</h1>
            <p>Lorem ipsum dolor amet venmo tilde kickstarter kinfolk forage iPhone vegan. Organic deep v biodiesel tacos. </p>
            <p>Taiyaki hoodie tumblr, poke pok pok meggings brunch taxidermy fam hammock leggings cold-pressed. </p>
            <p>Hell of schlitz drinking vinegar lyft chia crucifix roof party edison bulb banh mi affogato yr humblebrag bushwick offal. Man bun put a bird on it sartorial bitters. Meditation enamel pin asymmetrical godard before they sold out.</p>
            <p>Lorem ipsum dolor amet venmo tilde kickstarter kinfolk forage iPhone vegan. Organic deep v biodiesel tacos. </p>
            <p>Taiyaki hoodie tumblr, poke pok pok meggings brunch taxidermy fam hammock leggings cold-pressed. </p>
            <p>Hell of schlitz drinking vinegar lyft chia crucifix roof party edison bulb banh mi affogato yr humblebrag bushwick offal. Man bun put a bird on it sartorial bitters. Meditation enamel pin asymmetrical godard before they sold out.</p>
        </Col>
      </Row>
    )
  }
}

export default Content
