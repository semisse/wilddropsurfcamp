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

class Navigation extends Component {
  render() {

    var styles = {
      bmCrossButton: {
        width: 45,
        height: 45,
        top: 20,
        right: 20
      },
      
    }

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo Wild Drop" />
              </Link>
            </div>

            <Menu
              right
              styles={ styles }
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
              <Link id="rooms" className="menu-item" to="/rooms">
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
            </Menu>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Navigation
