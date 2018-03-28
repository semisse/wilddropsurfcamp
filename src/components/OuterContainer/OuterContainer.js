import React, { Component } from 'react'
import Link from 'gatsby-link'

import Hero from '../Index/Hero/Hero'
import Welcome from '../Index/Welcome/Welcome'
import RoomsAndThings from '../Index/RoomsAndThings/RoomsAndThings'
import About from '../Index/About/About'
import SocialAndMap from '../Index/SocialAndMap/SocialAndMap'
import Map from '../Index/Map/Map'
import Contacts from '../Index/Contacts/Contacts'

class OuterContainer extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="container-fluid" id="page-wrap">
        <Hero className="container-fluid" />

        <Welcome className="container-fluid" />

        <RoomsAndThings className="container" data={this.props.data} />

        <About className="container" data={this.props.data} />

        <SocialAndMap className="container" />

        <Contacts className="container-fluid" />

      </div>
    )
  }
}

export default OuterContainer
