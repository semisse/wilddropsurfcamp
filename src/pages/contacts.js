import React from 'react'
import Link from 'gatsby-link'

import Contacts from '../components/Contacts/Contacts'

const IndexPage = ({ data }) => (
  <div id="contacts">
    <Contacts data={data} />
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
