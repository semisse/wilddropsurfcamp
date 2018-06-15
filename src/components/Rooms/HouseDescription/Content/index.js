import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import Icons from './Icons'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <h2>The place</h2>
        <p>
          Are you a surfer? The house was made for you.
        </p>

        <p>
          We have a rack to keep your surfboards, a place to clean your wetsuits and a nice garden where you can relax after your surf session!
        </p>

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
