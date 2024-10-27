import React from 'react'
import logo from '../../assets/logo.png'
import usericon from '../../assets/usericon.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
   <div className="footer-top">
  <div className="footer-top-left">
   <img src={logo} alt="" />
   <p>I am a Web developer from , India with 5 years of experience in companies...</p>
  </div>

  <div className="footer-top-right">
   <div className="footer-email-input">
    <img src={usericon} alt="" />
    <input type="email" placeholder='Enter your Email' />
   </div>

   <div className="footer-subscribe"> Subscribe </div>
  </div>
   </div>
   <hr />
   <div className="footer-bottom">


     <p className='footer-bottom-left'> @2024 Gmalorex Bennet. All rights reserved.. </p>
    <div className="footer-bottom-right">
   <p> Term of Serives </p>
   <p> Privacy Policy </p>
   <p> Connect With Me </p>
    

    </div>
   </div>



    </div>
  )
}

export default Footer