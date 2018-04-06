import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

import Map from './Map/Map'
import Content from './Content/Content'
import './Contacts.sass'

class Contacts extends Component {
  render() {
    const data = this.props.data
    return (
      <div id="page-wrap">
        <Grid>
            <Row>
              <Col md={6} mdPush={6}><Content data={data} /></Col>
              <Col md={6} mdPull={6}><Map data={data} /></Col>
            </Row>
        </Grid>
      </div>
    )
  }
}

export default Contacts
