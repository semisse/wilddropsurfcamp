import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import './Icons.sass'

import Wc from '../../../../img/rooms/icons/Wc.svg'
import Kitchen from '../../../../img/rooms/icons/Kitchen.svg'
import Wifi from '../../../../img/rooms/icons/Wifi.svg'
import Sheets from '../../../../img/rooms/icons/Sheets.svg'
import Towel from '../../../../img/rooms/icons/Towel.svg'
import Hanger from '../../../../img/rooms/icons/Hanger.svg'
import WashingMachine from '../../../../img/rooms/icons/WashingMachine.svg'
import Shower from '../../../../img/rooms/icons/Shower.svg'
import Desk from '../../../../img/rooms/icons/Desk.svg'
import Parking from '../../../../img/rooms/icons/Parking.svg'
import Breakfast from '../../../../img/rooms/icons/Breakfast.svg'

class Icons extends Component {
  render() {
    return (
      <Col xs={10} xsOffset={1}>
        <Row className="icons">
          <Col xs={4}>
            <div className="image"><img src={Wc} /></div>
            <p>WC</p>
          </Col>
          <Col xs={4}>
            <div className="image"><img src={Kitchen} /></div>
            <p>Kitchen</p>
          </Col>
          <Col xs={4}>
            <div className="image"><img src={Wifi} /></div>
            <p>Wifi</p>
          </Col>
        </Row>
        <Row className="icons">
          <Col xs={4}>
            <div className="image"><img src={Sheets} /></div>
            <p>Clean Sheets</p>
          </Col>
          <Col xs={4}>
            <div className="image"><img src={Towel} /></div>
            <p>Towel</p>
          </Col>
          <Col xs={4}>
            <div className="image"><img src={Hanger} /></div>
            <p>Hangers</p>
          </Col>
        </Row>
        <Row className="icons">
          <Col xs={4}>
            <div className="image"><img src={WashingMachine} /></div>
            <p>Washing Machine</p>
          </Col>
          <Col xs={4}>
            <div className="image"><img src={Shower} /></div>
            <p>Shower</p>
          </Col>
          <Col xs={4}>
            <div className="image"><img src={Desk} /></div>
            <p>Working Desk</p>
          </Col>
        </Row>
        <Row className="icons">
          <Col xs={4}>
            <div className="image"><img src={Parking} /></div>
            <p>Free parking</p>
          </Col>
          <Col xs={4}>
            <div className="image"><img src={Breakfast} /></div>
            <p>Breakfast</p>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Icons
