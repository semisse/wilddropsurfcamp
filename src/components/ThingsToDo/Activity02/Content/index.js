import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <h2>Wind sports</h2>
        <p>
          Kitesurfing and Paragliding are popular. For kitesurfing you can find
          spots with or without waves. To the paragliding, there are specific
          landing points
        </p>
      </Col>
    )
  }
}

export default Content
