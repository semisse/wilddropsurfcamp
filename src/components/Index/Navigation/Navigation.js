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
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

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
            <img
              src={Logo}
              alt="Logo Wild Drop"
            />
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
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link
            exact
            id="home"
            className="menu-item"
            to="/"
            onClick={() => this.closeMenu()}
            activeStyle={{ color: 'white' }}
          >
            Home
          </Link>
          <Link
            id="rooms"
            className="menu-item"
            to="/rooms"
            onClick={() => this.closeMenu()}
            activeStyle={{ color: 'white' }}
          >
            Rooms
          </Link>
          <Link
            id="things-to-do"
            className="menu-item"
            to="/things-to-do"
            onClick={() => this.closeMenu()}
            activeStyle={{ color: 'white' }}
          >
            Things to do
          </Link>
          <Link
            id="about"
            className="menu-item"
            to="/about"
            onClick={() => this.closeMenu()}
            activeStyle={{ color: 'white' }}
          >
            About
          </Link>
          <Link
            id="contacts"
            className="menu-item"
            to="/contacts"
            onClick={() => this.closeMenu()}
            activeStyle={{ color: 'white' }}
          >
            Contacts
          </Link>
          <div className="social">
            <a href="https://www.facebook.com/wilddropsurfcamp/" target="_blank">
              <span>
                <img src={FacebookBlack} alt="Facebook" />
              </span>
            </a>
            <a href="https://www.tripadvisor.com/VacationRentalReview-g3396899-d14013783-WILD_DROP_surfcamp-Pataias_Leiria_District_Central_Portugal.html" target="_blank">
              <span>
                <img src={TripadvisorBlack} alt="TripAdvisor" />
              </span>
            </a>
            <a href="https://www.instagram.com/wilddrop.surfcamp/" target="_blank">
              <span>
                <img src={InstagramBlack} alt="Instagram" />
              </span>
            </a>
          </div>
          <div className="callme">
            <h3>Call me now!</h3>
            <a href="tel:+351918217275">
              <span className="button">+351 918 217 275</span>
            </a>
          </div>
        </Menu>
      </div>
    )
  }
}

export default Navigation
