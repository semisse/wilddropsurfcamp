import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './RoomsDescription.sass'

class RoomsDescription extends Component {
  render() {
    return (
      <div className="RoomsDescription">
        <h2>Dorms</h2>
        <p>
          Our dorms are bright and spacious with comfortable bunks and lockers.
        </p>

        <p>
          Guests have access cards to their dorm and the access is overseen by
          our staff. We offer mixed dorms as well as dorms for women only
          depending on availability.{' '}
        </p>

        <p>Showers and toilets are situated nearby each dorm.</p>
        
        <Link to="/contacts"><button>Book Now!</button></Link>
      </div>
    )
  }
}

export default RoomsDescription
