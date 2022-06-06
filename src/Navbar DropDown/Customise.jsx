import React from 'react';
import { Link } from 'react-router-dom';
import "./Customise.css";


function Customise({hidedropdown,showdropdown}) {
  return (
    <div onMouseEnter={()=>showdropdown()} onMouseLeave={()=> hidedropdown()} className='customise'>
        <div className='dropdown-customise'>
            <div>
                <h4>Featured</h4>
                <p>Nike By You New Releases</p>
            </div>
            <div>
                <h4>Nike By You</h4>
                <p>Men</p>
                <Link to={"/womens-clothes"}>Women</Link>
            </div>
            <div>
                <h4>By Sport</h4>
                <Link style={{"textDecoration":"none"}} to={"/mens-shoes"}>All shoes</Link><br />
                <p>Lifestyle</p>
                <Link style={{"textDecoration":"none"}} to={"/accessories"}>Accessories</Link><br />
                <p>Running</p>
                <Link style={{"textDecoration":"none"}} to={"/mens-basketball-shoes"}>Basketball</Link><br />
                <Link style={{"textDecoration":"none"}} to={"/allclothing"}>Clothing</Link>
                <p>Football</p>
            </div>
            <div>
                <h4>Icons</h4>
                <p>AIR Max</p>
                <p>Air Force 1</p>
                <p>Free</p>
                <p>Flyknit</p>
            </div>
        </div>
    </div>
  )
}

export default Customise