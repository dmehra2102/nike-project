import React from 'react';
import { useNavigate } from 'react-router';
import "./Womenclothes.css";

function WomensclothInput({el,index}) {
  const navigation = useNavigate();
  const handlenextpage = ()=>{

    navigation(`/item/${el._id}`);
  }
  return (
    <div onClick={handlenextpage} className="citybikeclub-image" key={el._id}>
        <img style={{
            "width" : "100%"
        }} src={el.image} alt={index} />
        <p className="bike-title">{el.product_name}</p>
        <p className="bike-subtitle">{el.product_type}</p>
        <p className="color-para">{el.color}</p>
        <p className="bike-price">{el.price}</p>
    </div>
  )
}

export default WomensclothInput;