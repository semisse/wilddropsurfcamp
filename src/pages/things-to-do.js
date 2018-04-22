import React from 'react'
import Link from 'gatsby-link'

import ThingsToDo from '../components/ThingsToDo/ThingsToDo'

const IndexPage = ({ data }) => (
  <div id="ThingsToDo">
    <ThingsToDo data={data} />
  </div>
)

export default IndexPage

export const query = graphql`
  query ThingsToDoQuery {
    paredes01: imageSharp(id: { regex: "/things-to-do/paredes/paredes01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    paredes02: imageSharp(id: { regex: "/things-to-do/paredes/paredes02.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    paredes03: imageSharp(id: { regex: "/things-to-do/paredes/paredes03.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    paredes04: imageSharp(id: { regex: "/things-to-do/paredes/paredes04.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    paredes05: imageSharp(id: { regex: "/things-to-do/paredes/paredes05.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    surf01: imageSharp(id: { regex: "/things-to-do/surf/surf01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    windsports01: imageSharp(id: { regex: "/things-to-do/windsports/windsports01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    skate01: imageSharp(id: { regex: "/about/gallery/about02.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    horseriding01: imageSharp(id: { regex: "/things-to-do/horseriding/horseriding01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    yoga01: imageSharp(id: { regex: "/about/gallery/about05.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    dorms: allFile (filter: {id: {regex: "/rooms/dorms/"}}) {
      edges {
        node {
          childImageSharp {
            sizes {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    },
    rooms: allFile (filter: {id: {regex: "/rooms/room/"}}) {
      edges {
        node {
          childImageSharp {
            sizes {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    },
    house: allFile (filter: {id: {regex: "/rooms/house/"}}) {
      edges {
        node {
          childImageSharp {
            sizes {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`
