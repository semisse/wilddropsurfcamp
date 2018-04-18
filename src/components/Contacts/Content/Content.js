import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'

import './Content.sass'

class Content extends Component {
  render() {
    const data = this.props.data
    return (
      <Row className="Contacts">
        <Col sm={12} className="title">
          <div className="title">
            <h2>
              This is <br />where we are
            </h2>
          </div>

          <div className="content">
            <li>
              Rua Vale Galego, 11 <br />
              2450-236, Nazaré <br />
              Portugal
            </li>
            <li>39°42′N 9°2'53.71''W</li>
            <li>
              <a href="mailto:wilddropsurfcamp@gmail.com">
                wilddropsurfcamp@gmail.com
              </a>
            </li>
            <div className="callme">
              <h3>Call me now!</h3>
              <a href="tel:+351918217275">
                <span className="button">+351 918 217 275</span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Content
