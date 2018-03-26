import React from 'react'
import Link from 'gatsby-link'

import './RoomsAndThings.sass'

const RoomsAndThings = () => (
  <div className="RoomsAndThings container">
    <div className="row">
      <Link to="/rooms" className="col-sm-12 col-md-6">
        <div className="Rooms">
          <h2>Our rooms</h2>
        </div>
      </Link>
      <Link to="/things-to-do" className="col-sm-12 col-md-6">
        <div className="Things">
          <h2>Things to do</h2>
        </div>
      </Link>
    </div>
  </div>
)

export default RoomsAndThings
