import React from 'react';
import flg from "../images/flg.svg"
import './Home_footer.css'

function Home_footer() {
    return (
        <>
             <section id="contact">
<div class="footer-line">
 </div>
<div class="footer">
<div class="left">
<div class="logo">
    creativity
</div>
<div class="flg">
  <img src={flg} alt="" srcset=""/>
 Buit by NEUB Students
</div>
</div>
<div class="right">
Address Telihaor, Sheikhghat<br/>
  Sylhet<br/>
  3100 Sylhet<br/>
  Bangladesh<br/>
  Tel +880 (821) 710 221-2<br/>
  Fax +880 (821) 710 223<br/>
</div>
</div>
</section>
<br/><br/><br/>
        </>
    )
}

export default Home_footer;

