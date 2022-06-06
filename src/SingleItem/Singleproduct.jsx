import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Singleproduct() {
    const params = useParams();
    const [item,setItem] = useState({});
    useEffect(() => {
        const getdata = async ()=>{
            await fetch(`http://localhost:8080/womens-clothing/${params.id}`)
            .then((res)=> res.json())
            .then((data)=> setItem(data));
        } 
        getdata();
    }, [])
    
  return (
    <div>
        <img src={item.image} alt={item._id} />
        <p>{item.product_name}</p>
    </div>
  )
}

export default Singleproduct