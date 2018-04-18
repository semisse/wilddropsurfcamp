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
            <h1>Nice to meet you!</h1>
            <p>My name's Edgar, some people call me Drop. </p>
            <p>I live here since ever and I am loving it. Like you, I love to travel and I have my needs, so feel comfortable to tell me if you need anything and I'll try to do my best for you.</p>
            <p>I also love to surf, skate, horse ride, surf, my friends, food, wine & beer, surf, barbecue, animals, watch the sunset, surf and so many other things you can also find here.</p>
            <p>Did I say that I love to surf already? The music is another side of my world, so please tell me if you love to make music as well!</p>
            <p>I am waiting for you to share what I have. Boas Ondas!</p>
        </Col>
      </Row>
    )
  }
}

export default Content
