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
    allFile (filter: {relativeDirectory: {regex: "/(gallery)/"}}) {
      edges {
        node {
          childImageSharp {
            id
            resolutions {
              ...GatsbyImageSharpResolutions
            }
          } 
        }
      }
    },
    allFile (filter: {relativeDirectory: {regex: "/(gallery)/"}}) {
      edges {
        node {
          childImageSharp {
            id
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
  }
`
