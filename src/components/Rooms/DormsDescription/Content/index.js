import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import Icons from './Icons'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <h2>The dorms</h2>
        <p>
          Share your holiday with your friends.
        </p>

        <p>
          Guests have key access to their dorm and free access to the kitchen, lounge room and garden.
        </p>

        <p>Showers and toilets are situated nearby each dorm. The house is overseen by our staff.</p>

        <div className="callme">
          <Link to="/contacts">
            <span className="button">book now!</span>
          </Link>
        </div>

        <Icons />
      </Col>
    )
  }
}

export default Content
