import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div id="things-to-do">
    <h1>Things To Do</h1>
  </div>
)

export default IndexPage

export const query = graphql`
  query ThingsQuery {
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
