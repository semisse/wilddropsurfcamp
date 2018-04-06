import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

import Hero from './Hero/Hero'
import DormsDescription from './DormsDescription/DormsDescription'
import RoomsDescription from './RoomsDescription/RoomsDescription'
import HouseDescription from './HouseDescription/HouseDescription'

class Rooms extends Component {
  render() {
    const data = this.props.data
    return (
      <div id="page-wrap">
        <Grid fluid={true}>
          <Hero />
        </Grid>
        <Grid>
          <DormsDescription data={data} />
          <RoomsDescription data={data} />
          <HouseDescription data={data} />
        </Grid>
      </div>
    )
  }
}

export default Rooms
