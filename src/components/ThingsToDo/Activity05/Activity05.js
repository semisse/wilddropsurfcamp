import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import Content from './Content'
import Galeria from './Galeria'

import './Activity.sass'

class Activity05 extends Component {
  render() {
    const data = this.props.data

    return (
      <Row className="show-grid" className="Activity">
        <Content />
        <Galeria data={data} />
      </Row>
    )
  }
}

export default Activity05
