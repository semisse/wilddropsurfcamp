import React from 'react'
import Link from 'gatsby-link'

import Logo from '../../../img/logo.svg'
import Superlativo from '../../../img/superlativo.svg'
import Facebook from '../../../img/facebook.svg'
import Tripadvisor from '../../../img/tripadvisor.svg'
import Instagram from '../../../img/instagram.svg'

import './Footer.sass'

const Footer = () => (
  <footer className="Footer container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 logo">
          <img src={Logo} />
        </div>

        <div className="col-sm-12 col-md-4 sitemap">
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
        </div>

        <div className="col-sm-12 col-md-4 social">
          <div className="social">
            <a href="http://facebook.com">
              <span>
                <img src={Facebook} alt="Facebook" />
              </span>
            </a>
            <a href="http://tripadvisor.com">
              <span>
                <img src={Tripadvisor} alt="TripAdvisor" />
              </span>
            </a>
            <a href="http://instagram.com">
              <span>
                <img src={Instagram} alt="Instagram" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="row credits">
        <div className="col-sm-12">
          <a href="http://samuelfialho.com" target="_blank">
            <h4>Designed by</h4>
            <img src={Superlativo} />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
