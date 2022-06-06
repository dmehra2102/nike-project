import React from 'react';
import "./LastVideoDiv.css";

function LastVideoDiv() {
  return (
    <div className='lastvideodiv'>
        <div>
            <video loop playsInline muted autoPlay
          className='last-video-div' 
          src='https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/ss22-ozworld-launch-hp-teaser-carousel-dual-animated-2-d_xkwhzw.mp4'>
        </video>
            <p className='last-video-div-text'>ENTER OZWORLD BE THE REAL YOU.</p>
            <p>Express youself your own way with the addidasOZworld collection.</p>
        </div>
        <div>
            <video loop playsInline muted autoPlay
         className='last-video-div' 
         src='https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/yoga-ss22-make_space-launch-hp-teaser_carousel-d_icmppg.mp4'
         >
        </video>
        <p className='last-video-div-text'>MAKE SPACE YOGA COLLECION</p>
        <p>Make space for your yoga practice.</p>
        </div>
        <div>
            <video loop muted playsInline autoPlay
         className='last-video-div'
         src='https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Originals/MMS/DROP%202%20-%20SS22/Updated%20assets/originals-ss22-m_ms-drop_2-launch-teaser-carousel-d.mp4'
         >
        </video>
        <p className='last-video-div-text'>WHAT'S YOUR COLOUR ?</p>
        <p>Discover which colour update of the M & M'S Forum 84 Low fits your style.</p>
        </div>
    </div>
  )
}

export default LastVideoDiv