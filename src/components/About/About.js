import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

import Content from './Content/Content'
import Galeria from './Galeria'

class About extends Component {
  render() {
    const data = this.props.data
    return (
      <div id="page-wrap">
        <Grid>
            <Content data={data}/>
            <Galeria data={data}/>
        </Grid>
      </div>
    )
  }
}

export default About
