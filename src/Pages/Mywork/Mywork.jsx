import React from 'react'
import about from '../../assets/about.png'
import arrow from '../../assets/arrow.png'
import pro1 from '../../assets/pro1.jpg'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'
import pro4 from '../../assets/pro4.png'
import pro5 from '../../assets/pro5.jpg'
import pro6 from '../../assets/pro6.jpg'
import './Mywork.css'
const Mywork = () => {
  return (

   
    <div id ="mywork" className='mywork'>
     <div className="mywork-title">
      <h1>My Latest Work  </h1>
       <img src={about} alt="" />
     </div>

     <div className ="mywork-cont">
     <img src={pro1} alt="" />
     <img src={pro2} alt="" />
     <img src={pro3} alt="" />
     <img src={pro4} alt="" />
     <img src={pro5} alt="" />
     <img src={pro6} alt="" />
     </div>

    <div className="mywork-showmore">
     <p>Show More  </p>
      <img src={arrow} alt="" />  
    </div>


    </div>
  )
}

export default Mywork