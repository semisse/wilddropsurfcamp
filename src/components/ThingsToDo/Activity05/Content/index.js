import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6} mdPush={6}>
        <h2>Yoga</h2>
        <p>
          Enjoy the benefits of a special yoga session by the sunset with our
          instructor. In our place or by the beach.
        </p>
      </Col>
    )
  }
}

export default Content
