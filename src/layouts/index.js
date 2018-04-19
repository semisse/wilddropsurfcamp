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
        <Helmet>
          <title>Wild Drop Surfcamp</title>
          <meta charSet="utf-8" />
          <meta name="description" content="WILD DROP SURFCAMP - NAZARÉ / PAREDES DA VITÓRIA - HOSTEL ACCOMMODATION SURFCAMP" />
          <meta name="keywords" content="wild, drop, surf, camp, hostel, nazaré, praia, norte, paredes, vitoria, waves, portugal, hotel, accommodation, horse, yoga, uncrowded, oeste, alugar, quarto" />
          <meta name="og:title" content="Wild Drop Surfcamp" />
          <meta name="og:description" content="WILD DROP SURFCAMP - NAZARÉ / PAREDES DA VITÓRIA - HOSTEL ACCOMMODATION SURFCAMP" />
          <meta name="og:image" content="https://wilddrop.netlify.com/static/hero.dbfca6a5.jpg" />
          <meta name="msapplication-TileColor" content="#EC645A" />
          <meta name="theme-color" content="#EC645A" />
          <link rel="canonical" href="http://www.wilddropsurfcamp.com" />
        </Helmet>
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
