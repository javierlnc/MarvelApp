import React from 'react'
import {Card}  from "./CardComponent";
import Slider from "react-slick";

function SliderCard({characters}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };
  return (
    
        <Slider {...settings}>
            {characters.map(character => (
                <Card key={character.id} characters={character}/>
                ))}
        </Slider>
  )
}
export default SliderCard
