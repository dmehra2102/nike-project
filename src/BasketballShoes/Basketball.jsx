import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { lazy, Suspense } from 'react';
import "./Basketball.css"
const BasketballInput = lazy(() => import('./BasketballInput'));

function Basketball() {
    const [basketball,setBasketball] = useState([]);
    useEffect(()=>{
        const getdata = async ()=>{
            await fetch("http://localhost:8080/mens-basketball-shoes")
            .then((res)=> res.json())
            .then((data)=> setBasketball(data.basketballshoes));
        } 
        getdata();
    },[])
  return (
    <div className='basketball-div'>
        {basketball.map((el,index)=> {
            return <Suspense key={el._id} fallback={<Skeleton variant="rectangular" style={{"marginTop": "22px" , "marginLeft": "10px"}} width={320} height={388} />}>
              <BasketballInput key={el._id} el={el} index={index}/>
            </Suspense>
        })}
    </div>
  )
}

export default Basketball