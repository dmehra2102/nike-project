import React from 'react';
import "./Allmenshoes.css";

function MenshoesDisplay({el,index}) {
  return (
    <div className="citybikeclub-image" key={el._id}>
        <img style={{
            "width" : "100%"
        }} src={el.image} alt={index} />
        <p className="mensshoes-title">{el.product_name}</p>
        <p className="mensshoes-subtitle">{el.product_type}</p>
        <p className="color-para">{el.color}</p>
        <p className="mensshoes-price">{el.price}</p>
    </div>
  )
}

export default MenshoesDisplay