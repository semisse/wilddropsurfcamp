import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import GoogleMapReact from 'google-map-react'

import Logo from '../../../img/logo.svg'

import './Map.sass'

const AnyReactComponent = ({ text }) => (
  <div className="bubble">
    <img src={Logo} />
  </div>
)

class Map extends Component {
  static defaultProps = {
    center: { lat: 39.701036, lng: -9.048253 },
    zoom: 14
  }
  render() {
    return (
      <div className="Map">
        <Row className="show-grid">
          <Col xs={12} className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyD-oOqbFnTcIXA9Ubl-9idp6XBY8-wu3R4' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent lat={39.701036} lng={-9.048253} />
            </GoogleMapReact>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Map
