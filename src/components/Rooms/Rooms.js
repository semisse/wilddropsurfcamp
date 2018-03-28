import React, { Component } from 'react'
import Link from 'gatsby-link'

import Hero from './Hero/Hero'
import DormsDescription from './DormsDescription/DormsDescription'
import RoomsDescription from './RoomsDescription/RoomsDescription'
import HouseDescription from './HouseDescription/HouseDescription'

class Rooms extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="container-fluid" id="page-wrap">
        <Hero className="container-fluid" />
        <DormsDescription />
        <RoomsDescription />
        <HouseDescription />
      </div>
    )
  }
}

export default Rooms
