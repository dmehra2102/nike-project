import { nike_data } from "../Homepage data/homepage.data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CityBikeClub.css"

import React from 'react'

function CityBikeClub() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
      <div className="main-div-city-bike">
          <p className="city-bike-club-heading">City Bike Club</p>
    <Carousel
    autoPlay={false}
    autoPlaySpeed={20000}
     responsive={responsive}>
        {nike_data.map((el,index)=> {
            return <div className="citybikeclub-image" key={index}>
                <img src={el.image} alt={index} />
                <div>
                  <p className="bike-title">{el.title}</p>
                  <p className="bike-price">{el.price}</p>
                </div>
                <p className="bike-subtitle">{el.sun_title}</p>
            </div>
        })}
      </Carousel>
      </div>
  )
}

export default CityBikeClub