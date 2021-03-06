import React from 'react'
import Link from 'gatsby-link'
import {Grid, Row, Col } from 'react-bootstrap'

import './Social.sass'

const Social = () => (
  <div className="Social">
    <Row className="show-grid">
      <Col xs={12} className="facebook">
        <a href="https://www.facebook.com/wilddropsurfcamp/" target="_blank">
          we are on facebook
        </a>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={6} className="tripadvisor">
        <a href="https://www.tripadvisor.com/VacationRentalReview-g3396899-d14013783-WILD_DROP_surfcamp-Pataias_Leiria_District_Central_Portugal.html" target="_blank">
          and on<br />tripadvisor
        </a>
      </Col>
      <Col xs={6} className="instagram">
        <a href="https://www.instagram.com/wilddrop.surfcamp/" target="_blank">
          and on<br />instagram
        </a>
      </Col>
    </Row>
  </div>
)

export default Social
