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
    AboutMe: imageSharp(id: { regex: "/about/edgar.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    about01: imageSharp(id: { regex: "/about/gallery/about01.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    about02: imageSharp(id: { regex: "/about/gallery/about02.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    about03: imageSharp(id: { regex: "/about/gallery/about03.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    about04: imageSharp(id: { regex: "/about/gallery/about04.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
    about05: imageSharp(id: { regex: "/about/gallery/about05.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`
