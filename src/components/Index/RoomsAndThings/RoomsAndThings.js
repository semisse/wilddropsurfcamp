import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import './RoomsAndThings.sass'

class RoomsAndThings extends Component {
  render() {
    return (
      <Row className="RoomsAndThings">
        <Col xs={12} md={6} className="Rooms">
          <Link to="/rooms">
            <Img sizes={this.props.data.ourRooms.sizes} />
            <h2>
              Our <br />rooms
            </h2>
          </Link>
        </Col>

        <Col xs={12} md={6} className="Things">
          <Link to="/things-to-do">
              <Img sizes={this.props.data.ThingsToDo.sizes} />
              <h2>
                Things <br />to do
              </h2>
            </Link>
        </Col>

      </Row>
    )
  }
}

export default RoomsAndThings
