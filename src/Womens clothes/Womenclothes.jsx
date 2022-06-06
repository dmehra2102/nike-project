import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { lazy, Suspense } from 'react';
import "./Womenclothes.css";
const WomensclothInput = lazy(() => import('./WomensclothInput'));

function Womenscloth() {
    const [womenscloth,setWomenscloth] = useState([]);
    useEffect(()=>{
        const getdata = async ()=>{
            await fetch("http://localhost:8080/womens-clothing")
            .then((res)=> res.json())
            .then((data)=> setWomenscloth(data.womencloth));
        } 
        getdata();
    },[])
  return (
    <div className='womenclothes-div'>
        {womenscloth.map((el,index)=> {
            return <Suspense key={el._id} fallback={<Skeleton variant="rectangular" style={{"marginTop": "22px" , "marginLeft": "10px"}} width={320} height={388} />}>
              <WomensclothInput key={el._id} el={el} index={index}/>
            </Suspense>
        })}
    </div>
  )
}

export default Womenscloth