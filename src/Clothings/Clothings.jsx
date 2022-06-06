import React, { useEffect, useState } from 'react'
// import AccessoriesInput from './AccessoriesInput';
import Skeleton from '@mui/material/Skeleton';
import { lazy, Suspense } from 'react';
import "./Clothings.css"
// import ClothingInput from './ClothingInput';
const ClothingInput = lazy(() => import('./ClothingInput'));

function Clothings() {
    const [clothing,setclothing] = useState([]);
    useEffect(()=>{
        const getdata = async ()=>{
            await fetch("http://localhost:8080/allclothing")
            .then((res)=> res.json())
            .then((data)=> setclothing(data.clothlist));
        } 
        getdata();
    },[])
  return (
    <div className='clothing-div'>
        {clothing.map((el,index)=> {
            return <Suspense key={el._id} fallback={<Skeleton variant="rectangular" style={{"marginTop": "22px" , "marginLeft": "10px"}} width={320} height={388} />}>
              <ClothingInput key={el._id} el={el} index={index}/>
            </Suspense>
        })}
    </div>
  )
}

export default Clothings