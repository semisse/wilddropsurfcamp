import React from 'react'
import Link from 'gatsby-link'

import Rooms from '../components/Rooms/Rooms'

const IndexPage = ({ data }) => (
  <div id="rooms">
    <Rooms data={data} />
  </div>
)

export default IndexPage

export const query = graphql`
  query RoomsQuery {
    dorms01: imageSharp(id: { regex: "/rooms/dorms/dorm01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    dorms02: imageSharp(id: { regex: "/rooms/dorms/dorm02.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    dorms03: imageSharp(id: { regex: "/rooms/dorms/dorm03.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    dorms04: imageSharp(id: { regex: "/rooms/dorms/dorm04.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    dorms05: imageSharp(id: { regex: "/rooms/dorms/dorm05.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    room01: imageSharp(id: { regex: "/rooms/room/room01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    room02: imageSharp(id: { regex: "/rooms/room/room02.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    room03: imageSharp(id: { regex: "/rooms/room/room03.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    house01: imageSharp(id: { regex: "/rooms/house/house01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    house02: imageSharp(id: { regex: "/rooms/house/house02.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    house03: imageSharp(id: { regex: "/rooms/house/house03.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    house04: imageSharp(id: { regex: "/rooms/house/house04.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    house04: imageSharp(id: { regex: "/rooms/house/house04.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    house05: imageSharp(id: { regex: "/rooms/house/house05.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    house06: imageSharp(id: { regex: "/rooms/house/house06.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`
