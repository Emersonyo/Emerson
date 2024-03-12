import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import emma from '/src/emma.jpeg'
import wow from '/src/emma.svg'
import home from '/src/home.svg'
import car from'/src/c.svg'
import cas from'/src/car.svg'
import open from '/src/open.png'
import est from '/src/est.jpeg'
import et from '/src/et.jpeg'
import set from '/src/triangule.png'
import {motion} from 'framer-motion'



import "./Homepage.css"


function Homepage()  {
   
    return(
     <>
     
<div className="homepage">
    <div className="top">
    <p className="p">Promo 📣 :Get an Export Tutor for just $1 today - <a href="http://localhost:5173/src/emma.jpeg" className="pol">Click here to get started! </a> 👈🏻 </p>
    
    </div>
    <br />
<div className="Pa">
    
   <i><span className="s">Phenom</span> </i>
   <div className="n-right">
<div className="n-list">
   <ul style={{listStyleType: 'none'}}>
                        
  <li  className="lis" > <img src={home} alt="" className="po"  />Home</li>
  
 
                        <li className="lis"> <img src={car} alt=""  className="po"/> Connect</li>
                        <li className="lis"> <img src={open} alt="" className="po" /> Store</li>                      
                        <li className="li"> 
<svg stroke="currentColor" fill="#ef4444" stroke-width="0" viewBox="0 0 16 16" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg> 0</li>
                        <li className="ivs">0</li>
                        <li className="ivs">0</li>
                        <li className="ivs">0</li>
                        
                     
                        
                        
                    </ul>
   </div>
   </div>

    <br />
    


</div>
<div className="wow">
    <div className="pri"></div>
  <img src={set} alt="" className="set" />
    <h1 className="fifi">Phenom <br /> Connect</h1>
    <br />
    <p className="cool">Unlock 10% off your child education! Apply now <br /> with Phenom Connect and find their perfect school. <br />Don't miss out, enroll today!</p>
    <br />
   

</div>



<div className="login">

        <h4 className="log">State</h4>

        <select>
      <option value="select state" className="ia">select state</option>
      <option value="">Abia</option>
      <option value="">Adamawa </option>
      <option value="">Akwa ibom</option>
      <option value="">Anambraa</option>
      <option value="">Bauchi</option>
      <option value="">Bayelsa</option>
      <option value="">Benue</option>
      <option value="">Borno</option>
      <option value="">Cross River</option>
      <option value="">Delta</option>
      <option value="">Ebonyi</option>
      <option value="">Edo</option>
      <option value="">Ekiti </option>
      <option value="">Enugu </option>
      <option value="">Gombe </option>
      <option value="">Imo </option>
      <option value="">Jigawa </option>
      <option value="">Kaduna </option>
      <option value="">Kano </option>
      <option value="">Kastina </option>
      <option value="">Kebbi </option>
      <option value="">Koggi </option>
      <option value="">Kwara </option>
      <option value="">Lagos </option>
      <option value="">Nasarawa </option>
      <option value="">Niger </option>
      <option value="">Ogun </option>
      <option value="">Ondo </option>
      <option value="">Osun </option>
      <option value="">Oyo </option>
      <option value="">Plateau </option>
      <option value="">Rivers  </option>
      <option value="">Sokoto </option>
      <option value="">Taraba   </option>
      <option value="">Yobe  </option>
      <option value="">Zamfara  </option>
      <option value="">Federal Capital Territory  </option>
      
        </select>
        
   
   <br />
   
   <p className="logs">L.G.A</p>
  <select name="" id="">
    <option value="select L.G.A"> select L.G.A</option>
    <option value="">Abak</option>
      <option value="">Eastern Obolo </option>
      <option value="">Eket</option>
      <option value="">Esit Eket</option>
      <option value="">Essien udim</option>
      <option value="">Etim Ekpo</option>
      <option value="">Etinan</option>
      <option value="">Ibeno</option>
      <option value="">Ibesikpo Asutan</option>
      <option value="">Ibiono ibom</option>
      <option value="">Ika</option>
      <option value="">Ikono</option>
      <option value="">Ikot Abasi </option>
      <option value="">Ikot Ekpene </option>
      <option value="">ini </option>
      <option value="">ita </option>
      <option value="">Mbo </option>
      <option value="">Mpot Enin </option>
      <option value="">Nsit Atai </option>
      <option value="">Nsit iban </option>
      <option value="">Nsit ubium </option>
      <option value="">Obot Akara </option>
      <option value="">Okoho </option>
      <option value="">oma </option>
      <option value="">oron </option>
      <option value="">Oruk anam </option>
      <option value="">Uruan </option>
     
  </select>
   <br />
   <p className="loga">Residential Address</p>
   <input type="text"  required className="i" />
   <br />
   <button className="wos">Search</button>
   
   <br />
  
</div>
<div className="right">

   <img src={emma} alt="" className="power"/>
   
 
</div>
<div className="prize">
<div className="pris"></div>
</div>

</ div>



     </>
    );
}

export default Homepage