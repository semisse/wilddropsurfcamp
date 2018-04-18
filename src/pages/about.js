import React from 'react'
import Link from 'gatsby-link'

import About from '../components/About/About'

const IndexPage = ({ data }) => (
  <div id="about">
    <About data={data}/>
  </div>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    AboutMe: imageSharp(id: { regex: "/home/aboutme.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
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
