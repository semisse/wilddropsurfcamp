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
          Run away from the crowded places and come to meet us. We live in a secret paradise with sun, nature, culture, gastronomy, good people and, guess what, by the North Canyon coast you can still find uncrowded waves, for all levels: beginners, experts, big riders... What's your style?
        </p>

        <p>
          Explore, live and be happy. You'll never be bored here! 
          We use to say we live in a small paradise, less than 1 hour from the capital Lisboa. Here it's the perfect solution if you want to surf, kitesurf, paraglide, horseride, hike, cycle, jog, watch the wildlife... or just enjoy the sun and the Portuguese food and wine! At the end of the day, we can provide you with yoga sessions, relaxing or therapeutic massages, a private chef cooking for you the Portuguese traditional food or perhaps sushi .
          It's really true, along this coast you can find uncrowded waves.
          </p>
          
          <p>Curiosities about Paredes da Vitória:</p>
          <li>10 Km from Nazaré/ Praia do Norte, 1h driving from Lisboa</li>
          <li>It’s the usual Nazaré surf schools' place for lessons</li>
          <li>You’ll find local seafood in the restaurants </li>
          <li>There are surfable spots along the coast from Nazaré to at least 15km to the north</li>
          <li>Around the beach, there is a large forest where you can find a lot of biodiversity. Unfortunately, some parts burned of it in 2017 and is now growing again.</li>
          <li>The Atlantic Road Bike Trail is the largest in the country. Over 62 kilometers, it is composed of several routes that offer exceptional conditions of comfort and safety for cycling, skating or skateboarding.</li>

          <p>Walking distance to:</p>
          <li>Beach</li>
          <li>Surf</li>
          <li>Restaurants</li>
          <li>Coffee shops</li>
          <li>Bars and disco</li>
          <li>Grocery</li>

          <p></p>
          <li>Quiet and safe place</li>
          <li>Different kinds of beaches</li>
          <li>Uncrowded beaches and waves</li>
          <li>Bandeira azul, it’s a quality beach, according to European Union</li>

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
