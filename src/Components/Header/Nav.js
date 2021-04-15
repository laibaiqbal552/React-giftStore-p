import React, { useState } from "react";
import Logo from './logo.png';
import './Nav.css';
const Nav = () => {
 
const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="position-relative ">
      <div className="d-flex space-between navPx align-center navbar">
        <div className="d-flex align-center">
        <button className="header__toggle hide-for-desktop" onClick= {() => setShowLinks(!showLinks)}>
           <span></span>
           <span></span>
           <span></span>
          </button>
          <img src={Logo} className="logo-typo" alt="img" />
        </div>
   
     <div className="menu hide-for-mobile right-menu" id={showLinks ? "hidden" : ""}>
        
          <ul className="inner-menu">
            <li>
              <a href="/">Demos</a>
            </li>
            <li>
              <a href="/">Listings</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li className="addplace">
              <a href="/">Add pLace</a>
            </li>
          </ul>
          
         
        
        </div>
        
      </div>
    </div>
  );
};
export default Nav;
