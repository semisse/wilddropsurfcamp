import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-bootstrap'

import Hero from './Hero/Hero'
import Location from './Location/Location'
import Activity01 from './Activity01/Activity01'
import Activity02 from './Activity02/Activity02'
import Activity03 from './Activity03/Activity03'
import Activity04 from './Activity04/Activity04'
import Activity05 from './Activity05/Activity05'

class ThingsToDo extends Component {
  render() {
    const data = this.props.data
    return (
      <div id="page-wrap">
        <Grid fluid={true}>
          <Hero />
        </Grid>
        <Grid>
          <Location data={data} />
          <Activity01 data={data} />
          <Activity02 data={data} />
          <Activity03 data={data} />
          <Activity04 data={data} />
          <Activity05 data={data} />
        </Grid>
      </div>
    )
  }
}

export default ThingsToDo
