import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import './Contacts.sass'

const Contacts = () => (
  <Row className="Contacts">
    <div className="container">
      <Col sm={6} className="title">
        <h2>
          This is <br />where we are
        </h2>
      </Col>

      <Col sm={6} className="content">
        <li>
          Rua Vale Galego, 11<br />
          2445, Paredes da Vitória, Pataias<br />
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
      </Col>
    </div>
  </Row>
)

export default Contacts
