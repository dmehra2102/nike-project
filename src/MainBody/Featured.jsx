import React from 'react';
import { Link } from 'react-router-dom';
import "./Featured.css";

function Featured() {
  return (
      <div className='featured-main-box'>
        <p>Featured</p>
        <div className='featured'>
            <div>
                <Link style={{"textDecoration":"none", "color":"black"}} to={"/sportlight-items"}>
                <figure>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/161f765b-e81a-4930-8dca-7deb1cca7c85/nike-just-do-it.png" alt="pic-1" />
                    <p className='featured-image-text'>The Latest Dunk & Air Jordan 1 Sneakers</p>
                </figure>
                </Link>
            </div>
            <div>
                <figure>
                    <img
                     src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/c1e2cd10-f0d0-4255-a4a4-fc60056b2fd1/nike-just-do-it.png" alt="pic-2" />
                     <p className='featured-image-text'>Styles to Inspire Dreamers</p>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Featured