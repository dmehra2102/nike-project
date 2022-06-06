import React, { useRef, useState } from 'react';
import "./TopBody.css"

function TopBody() {
    const videoRef = useRef(null);
    const [playing,setPlaying] = useState(false);
    const handlevideo = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
  return (
    <div className='topbody'>
        <video
        onClick={handlevideo}
        loop
        ref={videoRef}
         className='video-poster' autoPlay={true} muted>
            <source src='https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/sustainability-ss22-rfto-launch-hp-mh-d_qec44x.mp4' type="video/mp4"/>
        </video>
        <p className='run-for-oceans'>RUN FOR THE OCEANS</p>
        <p className='run-for-oceans-smalltext'>It's time to put on your running shoes and Run For The Oceans. Every minute counts.</p>
        <p className="video-text-btn">Learn More <span className='btn-arrow-icon'> &#8594;</span></p>
    </div>
  )
}

export default TopBody