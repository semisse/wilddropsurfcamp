import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './HouseDescription.sass'

class HouseDescription extends Component {
    render(){
        return(
            <div className="HouseDescription">
            <h1>Go wild <br/> and drop it</h1>
            <h2>Welcome to Portugal's <br/> best kept secret</h2>
        </div>
        )
    }
}

export default HouseDescription
