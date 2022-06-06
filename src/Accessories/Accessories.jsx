import React, { useEffect, useState } from 'react'
// import AccessoriesInput from './AccessoriesInput';
import Skeleton from '@mui/material/Skeleton';
import { lazy, Suspense } from 'react';
import "./Accessories.css"
const AccessoriesInput = lazy(() => import('./AccessoriesInput'));

function Accessories() {
    const [accessories,setAccessories] = useState([]);
    useEffect(()=>{
         fetch("http://localhost:8080/accessories")
            .then((res)=> res.json())
            .then((data)=> setAccessories(data.accessorieslist));
        
    },[])
  return (
    <div className='accessories-div'>
        {accessories.map((el,index)=> {
            return <Suspense key={el._id} fallback={<Skeleton variant="rectangular" style={{"marginTop": "22px" , "marginLeft": "10px"}} width={320} height={388} />}>
              <AccessoriesInput key={el._id} el={el} index={index}/>
            </Suspense>
        })}
    </div>
  )
}

export default Accessories