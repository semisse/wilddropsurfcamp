import React from 'react'
import PropTypes from 'prop-types'

import OuterContainer from '../components/OuterContainer/OuterContainer';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <OuterContainer data={data} />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
 query SiteContent {
   hero: imageSharp(id: {regex: "/hero/hero.jpg/"}) {
     sizes(maxWidth: 1240) {
       ...GatsbyImageSharpSizes
     }
   }
   ourRooms: imageSharp(id: {regex: "/home/our-rooms.jpg/"}) {
     sizes(maxWidth: 1240) {
       ...GatsbyImageSharpSizes
     }
   }
   ThingsToDo: imageSharp(id: {regex: "/home/things-to-do.jpg/"}) {
     sizes(maxWidth: 1240) {
       ...GatsbyImageSharpSizes
     }
   }
   AboutMe: imageSharp(id: {regex: "/home/aboutme.jpg/"}) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  }
 }
`
