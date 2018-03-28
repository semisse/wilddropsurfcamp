import React from 'react'
import Link from 'gatsby-link'

import Rooms from '../components/Rooms/Rooms'

const IndexPage = ({ data }) => (
  <div id="about">
    <h1>About</h1>
    <Rooms data={data} />
  </div>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    ourRooms: imageSharp(id: { regex: "/home/our-rooms.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    ThingsToDo: imageSharp(id: { regex: "/home/things-to-do.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    AboutMe: imageSharp(id: { regex: "/home/aboutme.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
