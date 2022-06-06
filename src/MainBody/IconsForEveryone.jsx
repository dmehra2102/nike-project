import React from 'react';
import "./IconForEveryone.css";

function IconsForEveryone() {
  return (
      <div className='main-div-foreveryone'>
         <p>Icons For Everyone</p>
         <div className='iconsforeveryone'>
             <div className='icons-image-1'>
                 <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1016,c_limit/ece146cd-c49e-4d39-a0a0-9885b40c67ac/nike-just-do-it.jpg" alt='pic-1'/>
                 <p className='big-image-text'>Blazers</p>
             </div>
             <div className='icons-image-2'>
                 <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_621,c_limit/fffa61e1-01de-4f22-8f9e-5a629ef4561b/nike-just-do-it.jpg" alt="pic-2" />
                 <p className='image-text'>Air Force 1</p>
             </div>
             <div className='icons-image-3'>
                 <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_621,c_limit/632173a0-e8ac-4ba3-aeeb-eda4e5b30fb0/nike-just-do-it.jpg" alt="pic-3" />
                 <p className='image-text'>Air Max</p>
             </div>
         </div>
      </div>
  )
}

export default IconsForEveryone