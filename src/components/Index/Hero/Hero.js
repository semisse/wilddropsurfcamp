import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './Hero.sass'

class Hero extends Component {
    render(){
        return(
            <div className="Hero">
            <h1>Go wild and drop it</h1>
            <h2>Welcome to Portugal's <br/> best kept secret</h2>
        </div>
        )
    }
}

export default Hero
