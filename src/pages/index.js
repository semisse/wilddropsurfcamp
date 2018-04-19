import React from 'react'
import Link from 'gatsby-link'

import OuterContainer from '../components/OuterContainer/OuterContainer'

const IndexPage = ({ data }) => (
  
  <div>
    <OuterContainer data={data} />
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteContent {
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
    HeroIndex: imageSharp(id: { regex: "/home/hero/hero.jpg/" }) {
      sizes(maxWidth: 1440) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
