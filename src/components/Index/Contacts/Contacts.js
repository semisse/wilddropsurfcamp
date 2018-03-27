import React from 'react'
import Link from 'gatsby-link'

import './Contacts.sass'

const Contacts = () => (
  <div className="Contacts container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 title">
          <h2>
            This is <br />where we are
          </h2>
        </div>
        <div className="col-sm-12 col-md-6 content">
          <li>
            Rua da Liberdade, n. 88 <br />
            2450-236, Nazaré <br />
            Portugal
          </li>
          <li>39°36′N 9°04′W</li>
          <li>
            <a href="mailto:wilddrop@gmail.com">wilddrop@gmail.com</a>
          </li>
          <div className="callme">
            <h3>Call me now!</h3>
            <a href="tel:+351917998536">
              <span className="button">+351 917 998 536</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contacts
