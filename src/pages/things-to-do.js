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
