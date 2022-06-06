import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import "./Allmenshoes.css";
import { lazy, Suspense } from 'react';
// import MenshoesDisplay from './MenshoesDisplay';

const MenshoesDisplay = lazy(() => import('./MenshoesDisplay'));

function Allmensshoes() {
    const [allshoes,setAllshoes] = useState([]);
    useEffect(()=>{
        
           fetch("http://localhost:8080/all-mens-shoes")
            .then((res)=> res.json())
            .then((data)=> setAllshoes(data.productlist));
    },[]);
  return (
    <div className='mensshoes-div'>
        {/* <Skeleton variant="rectangular" style={{"marginTop": "22px" , "marginLeft": "10px"}} width={320} height={388} /> */}
        {allshoes.map((el,index)=> {
            return <Suspense key={el._id} fallback={<Skeleton variant="rectangular" style={{"marginTop": "22px" , "marginLeft": "10px"}} width={320} height={388} />}>
              <MenshoesDisplay key={el._id} el={el} index={index}/>
            </Suspense>
        })}
    </div>
  )
}

export default Allmensshoes