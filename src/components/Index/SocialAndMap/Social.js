import React from 'react'
import Link from 'gatsby-link'

import './Social.sass'

const Social = () => (
  <div className="Social container">
    <div className="row">
      <div className="col-sm-12 facebook">
        <Link to="http://facebook.com" target="_blank">
          we are on facebook
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 tripadvisor">
        <Link to="http://tripadvisor.com" target="_blank">
          and on<br />tripadvisor
        </Link>
      </div>
      <div className="col-sm-6 instagram">
        <Link to="http://instagram.com" target="_blank">
          and on<br />instagram
        </Link>
      </div>
    </div>
  </div>
)

export default Social
