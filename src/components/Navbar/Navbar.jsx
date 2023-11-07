import React from 'react'
import '../Navbar/styles.css';
import Arrow from "../../assets/p2.png"
import phone from "../../assets/Vector.png"
import clock from "../../assets/p3.png"
import logo from "../../assets/image 1 (1).png"

const Navbar = () => {
  return (
    
    <div className=' fluid-container'>
      <div className='preNav d-flex justify-content-between '>
      <div className="left d-flex align-items-center">
        <div className='inner-left'>
        <img src={Arrow} alt="" />
        <span>xample@example.com</span>
        </div>
        <div className='inner-right'>
        <img src={phone} alt="" />
        <span>605-646-9841</span>
        </div>
      </div>
      <div className='right '>
        <img src={clock} alt="" />
        <span>8:00 AM until 6:00 PM</span>

      </div>
      </div>
      <div className='main-nav d-flex justify-content-between'>
        <div className='main-logo'>
      <img src={logo} alt="" />
        </div>
        <div className="main-middle d-flex ">
          <li className='home'>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact us</li>
        </div>
        <div className="main-button">
          <button>
            <a href="/" >Register /</a>
            <a href="/"> sign in</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
