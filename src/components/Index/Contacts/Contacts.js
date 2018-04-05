import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import './Contacts.sass'

const Contacts = () => (
  <Row className="Contacts">
    <Col lg={6} className="title">
      <h2>
        This is <br />where we are
      </h2>
    </Col>

    <Col xs={12} md={3} className="content">
      <li>
        Rua da Liberdade, n. 88 <br />
        2450-236, Nazaré <br />
        Portugal
      </li>
      <li>39°36′N 9°04′W</li>
      <li>
        <a href="mailto:wilddrop@gmail.com">wilddrop@gmail.com</a>
      </li>
      <div className="callme">
        <h3>Call me now!</h3>
        <a href="tel:+351917998536">
          <span className="button">+351 917 998 536</span>
        </a>
      </div>
    </Col>
  </Row>
)

export default Contacts
