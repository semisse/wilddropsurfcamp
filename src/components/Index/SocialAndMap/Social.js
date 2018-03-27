import React from 'react'
import Link from 'gatsby-link'

import './Social.sass'

const Social = () => (
  <div className="Social container">
    <div className="row">
      <div className="col-sm-12 facebook">
        <a href="http://facebook.com" target="_blank">
          we are on facebook
        </a>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 tripadvisor">
        <a href="http://tripadvisor.com" target="_blank">
          and on<br />tripadvisor
        </a>
      </div>
      <div className="col-sm-6 instagram">
        <a href="http://instagram.com" target="_blank">
          and on<br />instagram
        </a>
      </div>
    </div>
  </div>
)

export default Social
