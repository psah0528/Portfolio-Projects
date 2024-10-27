import React from 'react'
import about from '../../assets/about.png'
import arrow from '../../assets/arrow.png'
import './Service.css'


const Service = () => {
  return (
    <div id ="service" className='service'>
     <div className="service-title">
    <h1> My Serivces</h1>
    <img src={about} alt="" />
     </div>


     <div className="service-container">
      
      <div className="box">
      <h3>01</h3>
      <h2>Web Design</h2>
      <p>Web Development is the process of building programming</p>
      <p className='read'> Read More  
      <img src={arrow} alt="" /> </p>  
      </div>


     <div className="box">
      <h3>02 </h3>
      <h2>Graphics Design</h2>
      <p>Web Development is the process of building programming</p>
      <p className='read'> Read More 
      <img src={arrow} alt="" /> </p>
      </div>
    
    <div className="box">
      <h3>03 </h3>
      <h2>Social  Media </h2>
      <p>Web Development is the process of building programming</p>
      <p className='read'> Read More 
      <img src={arrow} alt="" /> </p>
      </div>

     <div className="box">
      <h3>04</h3>
      <h2>App Design</h2>
      <p>Web Development is the process of building programming</p>
      <p className='read'> Read More 
      <img src={arrow} alt="" /> </p>
      </div>

     <div className="box">
      <h3>05</h3>
      <h2>Digital Marketing</h2>
      <p>Web Development is the process of building programming</p>
      <p className='read'> Read More
      <img src={arrow} alt="" />  </p>
      </div>

    <div className="box">
      <h3>06</h3>
      <h2>Content Writing </h2>
      <p>Web Development is the process of building programming</p>
      <p className='read'> Read More 
      <img src={arrow} alt="" />  </p>
      </div>


      <div className="service-readmore">
      </div>
    </div>
     </div>


    
  )
}

export default Service