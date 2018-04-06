import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6} mdPush={6}>
        <h2>Activity 05</h2>
        <p>
          Our dorms are bright and spacious with comfortable bunks and lockers.
        </p>

        <p>
          Guests have access cards to their dorm and the access is overseen by
          our staff. We offer mixed dorms as well as dorms for women only
          depending on availability.{' '}
        </p>

        <p>Showers and toilets are situated nearby each dorm.</p>
      </Col>
    )
  }
}

export default Content
