import React from 'react';
import './Home.css'
import Home_navbar from "./Home_navbar";
import hero from "../images/main.svg";
import herobg from "../images/herobg.svg";
import About from "./About";
import Services from "./Services";
import Home_footer from "./Home_footer";
import "../index.css"


function Home() {
    return (
        <>
          <div class="wrapper">

            <Home_navbar />

            <header class="hero-container">
                <div class="left">
                    <h1>
                        Learn Anything,<br />
           From Anywhere.
       </h1>
                    <p>
                        “ Talent is universal,but opportunities are
         <br />  not.With access to online learning resources
         <br /> and instruction,anyone,anywhere,can gain
         <br />skills”
       </p>
                    <br />
                    <a href="/signin" class="btn2">Get Started</a>
                </div>
                <div class="right">
                    <img src={hero} alt="" />
                </div>
                <img class="herobg" src={herobg} alt="" srcset="" />
            </header> 
                

                <About/>
                <Services/>
            
                    
                <Home_footer/>
                
        <br/><br/>
            
            </div>
            <br/><br/>      <br/><br/>
        
        </>
    );
};

export default Home;
