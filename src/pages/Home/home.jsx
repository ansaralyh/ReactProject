import React from 'react'
import '../Home/home.css'
import carGroup from "../../assets/14244897_ThanitApril_44 1.png"
import logos from "../../assets/Clients Logos.png"
import image7 from "../../assets/image 7.png"
import map from "../../assets/image 9.png"

const home = () => {
  return (
   
  <div className='container'>
    <div className="section-one">

  <div className="main-left">
    <h3>Discover Excellence with Hb & SONS LLC</h3>
    <p>Our Premier Partner in Fuel Transport and Delivery</p>
    <button>Get in touch</button>
  </div>
  <div className="main-right">
<img src={carGroup} alt="" />
  </div>
    </div>

    {/* Section------two */}
    <div className="section-two">
      <h3 className="sec-two-heading">Working with Fortune <span className='client-500'>500+ clients</span> </h3>
      <p className='lower-para'>Join us in our journey to success.</p>
      <img src={logos} alt="" />
    </div>

    {/* Section------two */}


    {/* Section--three */}
      <div className="section-three">
        
        <div className="three-left-image">
    <img src={image7} alt="" />
        </div>
        <div className="three-right-content">
          <h3 className="sec3-head">
          Discover Excellence with Hb & SONS LLC
          </h3>
          <p className="sec3-para">
          Our Premier Partner in Fuel Transport and Delivery
          </p>
          <button>Get in touch</button>
        </div>
      </div>

    {/* Section--three */}

    {/* Section-five */}
    <div className="section-five arrow">
     <h3 className="sec5-head">
     Our Journey, Your Assurance
     </h3>
      <p className='sec5-lower-para'>Dedicated to Delivering Excellence in Fuel Hauler Carrier and Gas Hauler Services</p>
      <button>Get in touch</button>
    </div>
    {/* Section-five */}
      {/* Section--three */}
      <div className="section-three six">
       
        <div className="three-right-content">
          <h3 className="sec3-head btn">
          Find Us on the Map
          </h3>
          <p className="sec3-para">
          Explore Our Physical Location
          </p>
          <button>Get in touch</button>
        </div>
        <div className="three-left-image five">
    <img src={map} alt="" />
        </div>
      </div>

    {/* Section--three */}
    {/* Section-five */}
    <div className="section-five arrow">
     <h3 className="sec5-head">
     Ready to Fuel Your Needs?
     </h3>
      <p className='sec5-lower-para'>Contact Us for Inquiries, Quotes, or Any Other Information</p>
      <button>Get in touch</button>
    </div>
    {/* Section-five */}
  </div>
   
  )
}

export default home
