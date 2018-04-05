import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import Social from './Social'
import Map from './Map'

import './SocialAndMap.sass'

const SocialAndMap = () => (
    <Row className="show-grid SocialAndMap">
      <Col xs={12} sm={6} className="SocialWrapper">
        <Social />
      </Col>
      <Col xs={12} sm={6} className="MapWrapper">
        <Map />
      </Col>
    </Row>
)

export default SocialAndMap
