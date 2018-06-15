import React from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

import './Welcome.sass'

const Welcome = () => (
    <Row className="Welcome">
      <Col xs={12}>
        <h2>The Portuguese paradise <br/> is waiting for you</h2>
      </Col>

      <Col xs={12} md={8} mdOffset={2} lg={4} lgOffset={4}>
        <p>
        Welcome to Portugal's best kept secret and be amazed with our nature. Here you can explore, surf, taste the world's best gastronomy and wine, feel the North Canyon's power with the biggest waves in the world and so many other amazing things. Find us, discover yourself!
        </p>
      </Col>
    </Row>
)

export default Welcome
