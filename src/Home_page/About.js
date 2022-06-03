import React from 'react';
import "./About.css"
import Arrow from "../images/Arrow.svg"; 
import grp from "../images/grp.svg";

function About() {
    return (
        <>
            <section id="about">
                <div class="about">
                    <div class="left">
                        <h3>
                            About Us
       </h3>
                        <h1>
                            What makes <br /> us <space/>
           <span class="dff">different</span><space/>
           <space/> from <br />others?
       </h1>
                        <p>
                            <span class="l1">
                                <img src={Arrow} alt="" />
           We’re like the super friends..
          <br />
                                <img src={Arrow} alt="" />
               We’re Highly animated group..
               <br />
                                <img src={Arrow} alt="" />
                   We’re here to Help you..
                   </span>
                        </p>
                    </div>
                    <div class="right">
                        <img src={grp} alt="" srcset="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
