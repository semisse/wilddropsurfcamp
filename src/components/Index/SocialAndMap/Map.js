import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

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
    center: { lat: 39.69654, lng: -9.0516547 },
    zoom: 14,
  }
  render() {
    return (
      <div className="Map">
        <Row className="show-grid">
          <Col xs={12} className="google-map">
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent lat={39.69654} lng={-9.0516547} />
            </GoogleMapReact>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Map
