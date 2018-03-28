import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './RoomsAndThings.sass'

class RoomsAndThings extends Component {
  render() {
    return (
      <div className="RoomsAndThings container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Link to="/rooms">
              <Img sizes={this.props.data.ourRooms.sizes} />
              <h2>
                Our <br />rooms
              </h2>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6">
            <Link to="/rooms">
              <Img sizes={this.props.data.ThingsToDo.sizes} />
              <h2>
                Things <br />to do
              </h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default RoomsAndThings
