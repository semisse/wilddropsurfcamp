import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

import Hero from '../Index/Hero/Hero'
import Welcome from '../Index/Welcome/Welcome'
import RoomsAndThings from '../Index/RoomsAndThings/RoomsAndThings'
import About from '../Index/About/About'
import SocialAndMap from '../Index/SocialAndMap/SocialAndMap'
import Contacts from '../Index/Contacts/Contacts'

class OuterContainer extends Component {
  render() {
    const data = this.props.data
    return (
      <div id="page-wrap">
        <Grid fluid={true}>
            <Hero data={this.props.data} />
            <Welcome />
        </Grid>

        <Grid>
            <RoomsAndThings data={this.props.data} />
            <About data={this.props.data} />
            <SocialAndMap />
            
        </Grid>

        <Grid  fluid={true}>
          <Contacts />
        </Grid>

      </div>
    )
  }
}

export default OuterContainer
