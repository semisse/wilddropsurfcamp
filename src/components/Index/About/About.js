import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './About.sass'

const About = ({ data }) => (
  <div className="About container">
    <div className="row">
      <div className="col-sm-12 col-md-6 image">
          <Img sizes={data.AboutMe.sizes} />
      </div>
      <div className="col-sm-12 col-md-6 text">
        <h2>
        Nice to <br /> meet you!
        </h2>
        <p>
        My name is Edgar and amet wolf asymmetrical blog 3 wolf moon. Cliche tacos wolf squid. Asymmetrical photo booth coloring book selfies taiyaki whatever tofu etsy vexillologist next level tousled green juice. 
        </p>
      </div>
    </div>
  </div>
)

export default About
