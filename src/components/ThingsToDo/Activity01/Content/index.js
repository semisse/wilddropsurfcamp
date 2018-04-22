import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6} mdPush={6}>
        <h2>Surf</h2>
        <p>
          Along the coast you will find a big diversity of waves. Different
          levels and sizes for beginners, experts and big riders. The north
          canyon is just right there! We also have an agreement with the local
          surfschools. We can also just provide you equipment and advise you to
          the best spots.
        </p>
      </Col>
    )
  }
}

export default Content
