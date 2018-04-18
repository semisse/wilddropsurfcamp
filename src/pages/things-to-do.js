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
