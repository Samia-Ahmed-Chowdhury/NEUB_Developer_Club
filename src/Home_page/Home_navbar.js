import React from "react";
import "../Home_page/Home_navbar.css"
import pic from "../images/creativity.svg";
import {Link} from 'react-router-dom'
function Home_navbar() {
    return (
      <>

        <nav class="desktop-nav">
            <div class="logo">
            <Link to={"/"} className="brand-logo left"
            style={{marginTop:"-29px",
            marginLeft:"22px",
            fontWeight:"bold",  
            }}
            >Dev<span style={{color:"#EBF2FF",fontWeight:"bold"}}>.</span> <span style={{color:"#2161DB"}}>.</span>rOOm</Link>
            </div>
       
            <ul class="menu-items">
                <li>
                    <a href="#" >Home </a>
                </li>
                <li>
                    <a href="#about">About </a>
                </li>
                <li>
                    <a href="#service">Services </a>
                </li>
                <li>
                    <a href="#contact">contact </a>
                </li>
                <li>
                    <a href="/signup" class="btn">Sign Up </a>
                </li>
            </ul>
        </nav>
        {/* <!-- end of desktop section --> */}
        

      
 
      </>
    );
  };
  
  export default Home_navbar;