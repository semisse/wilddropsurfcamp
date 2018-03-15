import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Index/Navigation/Navigation'
import Hero from '../components/Index/Hero/Hero'
import Welcome from '../components/Index/Welcome/Welcome'
import Rooms from '../components/Index/Rooms/Rooms'
import ThingsToDo from '../components/Index/ThingsToDo/ThingsToDo'
import About from '../components/Index/About/About'
import Social from '../components/Index/Social/Social'
import Map from '../components/Index/Map/Map'
import Contacts from '../components/Index/Contacts/Contacts'
import Footer from '../components/Index/Footer/Footer'

import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.min.css'
import './index.sass'

const TemplateWrapper = () => (
  <div>
    <Helmet
      title="Wild Drop"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navigation />
    <Hero />
    <Welcome />
    <Rooms />
    <ThingsToDo />
    <About />
    <Social />
    <Map />
    <Contacts />
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
