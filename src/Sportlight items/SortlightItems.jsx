import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { lazy, Suspense } from 'react';
import "./Sportlightitem.css";
// import Sportligthitemsinput from './Sportligthitemsinput';
const Sportligthitemsinput = lazy(() => import('./Sportligthitemsinput'));

function SportlightItems() {
    const [sportlightitem,setSportlightitem] = useState([]);
    useEffect(()=>{
        const getdata = async ()=>{
            await fetch("http://localhost:8080/sportlight-items")
            .then((res)=> res.json())
            .then((data)=> setSportlightitem(data.sportlightitem));
        } 
        getdata();
    },[])
  return (
    <div className='sportlightitems-div'>
        {sportlightitem.map((el,index)=> {
            return <Suspense key={el._id} fallback={<Skeleton variant="rectangular" style={{"marginTop": "22px" , "marginLeft": "10px"}} width={320} height={388} />}>
              <Sportligthitemsinput key={el._id} el={el} index={index}/>
            </Suspense>
        })}
    </div>
  )
}

export default SportlightItems