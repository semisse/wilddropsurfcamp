import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import WebFont from 'webfontloader'

import Navigation from '../components/Index/Navigation/Navigation'
import NavigationWhite from '../components/Index/NavigationWhite/NavigationWhite'
import Footer from '../components/Index/Footer/Footer'

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import './css/bootstrap.min.css'
import './index.sass'

import OuterContainer from '../components/OuterContainer/OuterContainer'

import OGImage from '../img/ogimage.jpg'

class TemplateWrapper extends Component {

  componentDidMount = () => {
    WebFont.load({
      typekit: {
        id: 'ojv8ltq',
        async: true
      },
    })

  }

  

  render() {

    function Nav() {

      if(typeof window !== 'undefined' && window.location.pathname === '/') {
        return <Navigation />
      } else if (typeof window !== 'undefined' && window.location.pathname === '/about') {
        return <Navigation />
      } else if (typeof window !== 'undefined' && window.location.pathname === '/contacts') {
        return <Navigation />
      } else {
        return <NavigationWhite />
      }
    }

    return (
      <div id="outer-container">
        <Helmet
          title="Wild Drop"
          meta={[
            { name: 'description', content: 'WILD DROP SURFCAMP - NAZARÉ / PAREDES DA VITÓRIA - HOSTEL ACCOMMODATION SURFCAMP' },
            { name: 'keywords', content: 'wild, drop, surf, camp, hostel, nazaré, praia, norte, paredes, vitoria, waves, portugal, hotel, accommodation, horse, yoga, uncrowded, oeste, alugar, quarto' },
            { name: 'og:title', content: 'Wild Drop Surfcamp' },
            { name: 'og:url', content: 'http://www.wildropsurfcamp.com' },
            { name: 'og:description', content: 'NAZARÉ / PAREDES DA VITÓRIA - HOSTEL ACCOMMODATION SURFCAMP' },
            { name: 'og:image', content: {OGImage} },
          ]}
        />
        <Nav />
        { this.props.children({...this.props}) }
        <Footer className="container-fluid" />
      </div>
    )
  }
}

export default TemplateWrapper

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
