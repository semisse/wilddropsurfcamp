import React from 'react'
import Slider from 'react-slick'
import Img from 'gatsby-image'

class Slick extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const Images = this.props.data.allFile.edges

    return (
      <div>
        <Slider {...settings}>
          {Images.map(Image => {
            return <div key={Image.node.childImageSharp.resolutions.srcSet}><Img resolutions={Image.node.childImageSharp.resolutions} /></div>
          })}
        </Slider>
      </div>
    );
  }
}

export default Slick