import React from 'react';
import b1 from "../images/b1.png"; 
import b2 from "../images/b2.png"; 
import b3 from "../images/b3.png"; 
import './Services.css'
function Services() {
    return (
        <>
           
<section id="service">
<div class="services">
  <h1>
  What We Provide
  </h1>
  <p>
      Valuable assistance to the community and particularly to
                     <br/>  the clients we serve.
  </p>

  <div class="box">
      <div class="box1">
          <img src={b1} alt="" srcset=""/>
           <h2>Help insurance</h2>
           <p>We’ll help you in your problem...</p>
      </div>
      <div class="box2">
          <img src={b2} alt="" srcset=""/>
           <h2>Encourage You</h2>
           <p>We’re here to encourage you to learn..</p>
      </div>

      <div class="box3">
          <img src={b3} alt="" srcset=""/>
           <h2>Enhance ideas</h2>
           <p>We’ll enhance your ideas..</p>
      </div>
  </div>
</div>
</section>

        </>
    )
}

export default Services
