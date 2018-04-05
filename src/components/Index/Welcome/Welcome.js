import React from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

import './Welcome.sass'

const Welcome = () => (
  
    <Row className="Welcome">
      <Col xs={12}>
        <h2>Hello Friend!</h2>
      </Col>

      <Col xs={12} md={8} mdOffset={2} lg={4} lgOffset={4}>
        <p>
          Lorem ipsum dolor amet wolf asymmetrical blog 3 wolf moon. Cliche
          tacos wolf squid. Asymmetrical photo booth coloring book selfies
          taiyaki whatever tofu etsy vexillologist next level tousled green
          juice.{' '}
        </p>
      </Col>
    </Row>

 
 
)

export default Welcome
