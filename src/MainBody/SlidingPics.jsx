import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./SlidingPics.css";

import React from 'react'

function SlidingPics() {
  return (
    <div className="slidingpics">
        <Carousel 
        showArrows={false}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        showThumbs={true}
        showIndicators={false}
        >
                <div>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/ee4627db-76c5-4093-8c9a-173bccf1f35a/nike-just-do-it.jpg" alt="pic-1" />
                    <p className="image1-text">EMPOWER YOURSELF</p>
                </div>
                <div>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_925,c_limit/449cdd7d-ebc1-44e8-bf14-c76a843cce01/nike-just-do-it.jpg" alt="pic-2" />
                    <h1 className="image2-text">JORDAN 23 ENGINEERED</h1>
                </div>
                <div>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/6ea14dc9-c3f0-4687-889d-01b2efeff425/resmi-nike-sitesi.png" alt="pic-3" />
                </div>
                <div>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/f7080153-6811-4bcc-9ef9-bfd9d83ce3b4/men-s-shoes-clothing-accessories.jpg" alt="pic-4" />
                    <h1 className="image3-text">YOUR GEAR. YOUR GAME.</h1>
                </div>
            </Carousel>
    </div>
  )
}

export default SlidingPics