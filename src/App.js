// import { Routes } from 'react-router';
import './App.css';
import Allmensshoes from './Mens categories/Allmensshoes';
import {Routes,Route} from "react-router-dom"
import CityBikeClub from './MainBody/CityBikeClub';
import Featured from './MainBody/Featured';
import IconsForEveryone from './MainBody/IconsForEveryone';
import LastVideoDiv from './MainBody/LastVideoDiv';
import SlidingPics from './MainBody/SlidingPics';
import TopBody from './MainBody/TopBody';
import NavbarBottom from './Navbar/NavbarBottom';
import NavbarMiddle from './Navbar/NavbarMiddle';
import NavbarTop from './Navbar/NavbarTop';
import Accessories from './Accessories/Accessories';
import Clothings from './Clothings/Clothings';
import Basketball from './BasketballShoes/Basketball';
import Womenscloth from './Womens clothes/Womenclothes';
import Singleproduct from './SingleItem/Singleproduct';
import SportlightItems from './Sportlight items/SortlightItems';
import CategoriesFiltering from './Sidebar_Filter/CategoriesFiltering';


function App() {
  return (
    <div className="app">
      <div>
        <NavbarTop />
        <NavbarMiddle />
        <NavbarBottom />
      </div>
      <div className='main-body-div'>
        <div className='filtering-div'>
          <CategoriesFiltering />
        </div>
        <div className='product-div'>
        <Routes>
          <Route path="/" element={<div> 
             <SlidingPics />
             <TopBody />
             <IconsForEveryone />
             <Featured />
             <CityBikeClub />
             <LastVideoDiv />
            </div>}>
          </Route>
          <Route path="/mens-shoes" element={<Allmensshoes />}></Route>
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/allclothing" element={<Clothings />}></Route>
          <Route path="/mens-basketball-shoes" element={<Basketball />}></Route>
          <Route path='/womens-clothes' element={<Womenscloth />}></Route>
          <Route path='/item/:id' element={<Singleproduct />}></Route>
          <Route path='/sportlight-items' element={<SportlightItems />}></Route>
        </Routes>
        {/* </Suspense> */}
       </div>
      </div>
    </div>
  );
}

export default App;