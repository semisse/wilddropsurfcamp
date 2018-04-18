import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import Icons from './Icons'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6} mdPush={6}>
        <h2>The double room</h2>
        <p>
          The couples always want it
        </p>

        <p>
          Guests have access cards to their dorm and the access is overseen by
          our staff. We offer mixed dorms as well as dorms for women only
          depending on availability.{' '}
        </p>

        <p>Showers and toilets are situated nearby each dorm.</p>

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
