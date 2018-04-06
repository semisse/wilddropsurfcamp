import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import Content from './Content'
import Galeria from './Galeria'

import './DormsDescription.sass'

class DormsDescription extends Component {
  render() {
    const data = this.props.data

    return (
      <Row className="show-grid" className="DormsDescription">
        <Content />
        <Galeria data={data} />
      </Row>
    )
  }
}

export default DormsDescription
