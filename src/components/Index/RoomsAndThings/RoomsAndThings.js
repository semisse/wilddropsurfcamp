import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './RoomsAndThings.sass'

const RoomsAndThings = ({ data }) => (
  <div className="RoomsAndThings container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Link to="/rooms" >
          <Img sizes={data.ourRooms.sizes} />
          <h2>Our <br/>rooms</h2>
        </Link>
      </div>
      <div className="col-sm-12 col-md-6">
        <Link to="/rooms" >
          <Img sizes={data.ThingsToDo.sizes} />
          <h2>Things <br/>to do</h2>
        </Link>
      </div>
    </div>
  </div>
)

export default RoomsAndThings
