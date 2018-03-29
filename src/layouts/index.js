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

import './css/bootstrap-grid.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.min.css'
import './index.sass'

import OuterContainer from '../components/OuterContainer/OuterContainer'

class TemplateWrapper extends Component {

  componentDidMount = () => {
    WebFont.load({
      typekit: {
        id: 'ojv8ltq',
        async: true
      },
    })

    

    // let RightNavigation
    //   if (location.pathname === '/') {

    //     // RightNavigation = <Navigation />

    //     // return RightNavigation
    //     return 'Hello'
    //   } else {
    //     RightNavigation = <NavigationWhite />

    //     return RightNavigation
    //   }

  }

  

  render() {

    function Nav() {

      if(typeof window !== 'undefined' && window.location.pathname === '/') {
        return <Navigation />
      } else {
        return <NavigationWhite />
      }
    }
    
    // try {
    //   // const isHomepage = location.pathname === withPrefix("/");
    //   const isHomepage = location.pathname
    //   console.log(isHomepage)
  
    // } catch (e) {
    //   console.log(e)
    // }

    return (
      <div id="outer-container">
        <Helmet
          title="Wild Drop"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
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
