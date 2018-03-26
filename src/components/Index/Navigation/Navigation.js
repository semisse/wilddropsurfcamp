import React, { Component } from 'react'
import Link from 'gatsby-link'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import { elastic as Menu } from 'react-burger-menu'

import './Navigation.sass'

import Logo from '../../../img/logo.svg'
import Burger from '../../../img/burger.svg'
import Cross from '../../../img/cross.svg'
import FacebookBlack from '../../../img/facebook-black.svg'
import TripadvisorBlack from '../../../img/tripadvisor-black.svg'
import InstagramBlack from '../../../img/instagram-black.svg'

class Navigation extends Component {
  render() {
    var styles = {
      bmCrossButton: {
        width: 45,
        height: 45,
        top: 20,
        right: 20,
      },
      bmMenu: {
        width: '100%',
      },
      bmItemList: {
        width: '100%',
        left: 'auto',
        marginTop: '72pt',
      },
    }

    return (
      <div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo Wild Drop" />
          </Link>
        </div>

        <Menu
          right
          styles={styles}
          width={'100%'}
          customBurgerIcon={<img src={Burger} />}
          customCrossIcon={<img src={Cross} />}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          noOverlay
        >
          <Link id="home" className="menu-item" to="/">
            Home
          </Link>
          <Link id="rooms" className="menu-item" to="/page-2">
            Rooms
          </Link>
          <Link id="things-to-do" className="menu-item" to="/things-to-do">
            Things to do
          </Link>
          <Link id="about" className="menu-item" to="/about">
            About
          </Link>
          <Link id="contacts" className="menu-item" to="/contacts">
            Contacts
          </Link>
          <div className="social">
            <Link to="http://facebook.com">
              <span>
                <img src={FacebookBlack} alt="Facebook" />
              </span>
            </Link>
            <Link to="http://tripadvisor.com">
              <span>
                <img src={TripadvisorBlack} alt="TripAdvisor" />
              </span>
            </Link>
            <Link to="http://instagram.com">
              <span>
                <img src={InstagramBlack} alt="Instagram" />
              </span>
            </Link>
          </div>
          <div className="callme">
            <h3>Call me now!</h3>
            <a href="tel:+351917998536">
              <span className="button">+351 917 998 536</span>
            </a>
          </div>
        </Menu>
      </div>
    )
  }
}

export default Navigation
