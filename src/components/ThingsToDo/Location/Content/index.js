import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'react-bootstrap'

import Icons from './Icons'

class Content extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <h2>Paredes da Vitória / Nazaré</h2>
        <p>
          Run away from the crowded places and come to meet us. We live in a
          secret paradise with sun, nature, culture, gastronomy, good people
          and, guess what, here you can still find uncrowded waves, for all
          levels: beginners, experts, big riders... What's your style?
        </p>

        <p>
          Explore, live and be happy. You'll never be bored here! We use to say
          we live in a small paradise, less than 1 hour from the capital Lisboa.
          Here it's the perfect solution if you want to surf, kitesurf,
          paragliding, horseride, hiking, cycling, jogging, watch the
          wildlife... or just enjoy the sun and the portuguese food and wine! In
          the end of the day, we can provide you yoga sessions, relaxing or
          therapeutic massages, a private chef cooking for you the portuguese
          traditional food or sushi perheaps. It's really true, along this coast you can find uncrowded waves.
          </p>
          
          <p>Curiosities about Paredes da Vitória:</p>
          <li>10 Km from Nazaré/Praia do Norte, 1h driving from Lisboa</li>
          <li>Less than 15km from Alcobaca</li>
          <li>It’s the usual Nazaré surf schools place for lessons</li>
          <li>You’ll find local seafood in the restaurants</li>
          <li>There are surfable spots along the coast from Nazaré to at least 15km to the north</li>
          <li>Around the beach, there is a large forest where you can find a lot of biodiversity</li>
          <li>The Atlantic Road Bike Trail is the largest in the country</li>
          <li>Over 62 kilometers, it is composed of several routes that offer exceptional conditions of comfort and safety for cycling, skating or skateboarding</li>

        <div className="callme">
          <Link to="/contacts">
            <span className="button">book now!</span>
          </Link>
        </div>
      </Col>
    )
  }
}

export default Content
