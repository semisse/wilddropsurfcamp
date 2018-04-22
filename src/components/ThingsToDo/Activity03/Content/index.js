import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6} mdPush={6}>
        <h2>Skate</h2>
        <p>
          Try our miniramp, go to the skatepark or just cruise around. The
          nearest skatepark is located in Pataias. You can also practise your
          surf moves on the downhill with the amazing "Lion" over the beach
          view.
        </p>
      </Col>
    )
  }
}

export default Content
