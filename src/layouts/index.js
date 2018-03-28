import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import WebFont from 'webfontloader'

import Navigation from '../components/Index/Navigation/Navigation'
import Footer from '../components/Index/Footer/Footer'

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
      },
    })
  }

  render() {
    return (
      <div id="outer-container">
        <Helmet
          title="Wild Drop"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigation />
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
