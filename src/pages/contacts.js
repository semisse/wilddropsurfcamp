import React from 'react'
import Link from 'gatsby-link'

import Rooms from '../components/Rooms/Rooms'

const IndexPage = ({ data }) => (
  <div id="contacts">
    <h1>Contacts</h1>
    <Rooms data={data} />
  </div>
)

export default IndexPage

export const query = graphql`
  query ContactsQuery {
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
