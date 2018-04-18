import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import Icons from './Icons'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <h2>Paredes da Vitória / Nazaré</h2>
        <p>
          Run away from the crowded places and come to meet us. We live in a secret paradise with sun, nature, culture, gastronomy, good people and, guess what, here you can still find uncrowded waves, for all levels: beginners, experts, big riders... What's your style?
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
