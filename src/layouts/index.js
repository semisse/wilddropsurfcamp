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
            { name: 'og:image', content: '../img/ogimage.jpg' },
            { name: 'msapplication-TileColor', content: '#EC645A' },
            { name: 'theme-color', content: '#EC645A' },
            { name: 'msapplication-TileImage', content: '../img/meta/ms-icon-144x144.png' },
          ]}
          link={[
            { rel: 'apple-touch-icon', sizes: '57x57', href: '../img/meta/apple-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes: '60x60', href: '../img/meta/apple-icon-60x60.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: '../img/meta/apple-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes: '76x76', href: '../img/meta/apple-icon-76x76.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: '../img/meta/apple-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: '../img/meta/apple-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: '../img/meta/apple-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: '../img/meta/apple-icon-152x152.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '../img/meta/apple-icon-180x180.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '../img/meta/android-icon-192x192.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '../img/meta/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '96x96', href: '../img/meta/favicon-96x96.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '../img/meta/favicon-16x16.png' },
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
