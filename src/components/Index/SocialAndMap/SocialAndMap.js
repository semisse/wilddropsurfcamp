import React from 'react'
import Link from 'gatsby-link'

import Social from './Social'
import Map from './Map'

import './SocialAndMap.sass'

const SocialAndMap = () => (
  <div className="SocialAndMap container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Social />
      </div>
      <div className="col-sm-12 col-md-6">
        <Map />
      </div>
    </div>
  </div>
)

export default SocialAndMap
