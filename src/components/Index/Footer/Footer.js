import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import Logo from '../../../img/logo.svg'
import Superlativo from '../../../img/superlativo.svg'
import Facebook from '../../../img/facebook.svg'
import Tripadvisor from '../../../img/tripadvisor.svg'
import Instagram from '../../../img/instagram.svg'

import './Footer.sass'

const Footer = () => (
  <footer className="Footer container-fluid">
  <div className="container">
    <Row>
      <Col xs={12} md={4} className="logo">
        <img src={Logo} />
      </Col>

      <Col xs={12} md={4} className="sitemap">
        <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/rooms">rooms</Link>
            </li>
            <li>
              <Link to="/things-to-do">things to do</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contacts">contacts</Link>
            </li>
      </Col>
      <Col xs={12} md={4} className="social">
      
            <a href="https://www.facebook.com/wilddropsurfcamp/" target="_blank">
              <span>
                <img src={Facebook} alt="Facebook" />
              </span>
            </a>
            <a href="http://tripadvisor.com" target="_blank">
              <span>
                <img src={Tripadvisor} alt="TripAdvisor" />
              </span>
            </a>
            <a href="https://www.instagram.com/wilddrop.surfcamp/" target="_blank">
              <span>
                <img src={Instagram} alt="Instagram" />
              </span>
            </a>
          
      </Col>

    </Row>
    <Row className="credits">
      <Col xs={12}>
      <a href="http://samuelfialho.com" target="_blank">
            <h4>Designed by</h4>
            <img src={Superlativo} />
          </a>
      </Col>
    </Row>
    </div>
  </footer>
)

export default Footer
