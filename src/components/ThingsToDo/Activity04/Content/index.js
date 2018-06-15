import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <h2>Horse riding</h2>
        <p>
        If you're a horse lover, we can provide you certified horse riding lessons on well educated dressage horses. You can also enjoy a pleasurable tour by the beach.
        </p>
      </Col>
    )
  }
}

export default Content
