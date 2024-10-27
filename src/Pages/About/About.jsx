import React from 'react'
import about from '../../assets/about.png'
import profile from '../../assets/profile.png'
import './About.css'

const About = () => {
  return (
    <div  id ="about" className='about'>

     <div className="about-title">
      <h1>About Me </h1>
      <img src={about} alt="" />
     </div>

     <div className="about-sections">
      <div className="about-left">
       <img src={profile} alt="" />
      </div>

      <div className="about-right">
       <div className="about-para">
        <p>  I am an experienced Frontend Developer with over a decade of proffesional experties in the fileds. Throughout my carreier, I have had the privillage of collaborating with prestigious organizations contributting to their sucess and growth. </p>
        <p> My Passion for frontend development is not only reflected in my extensive experienced but also in the ethusiasm and dedications I bring to each project. </p>
       </div>

       <div className="about-skills">
        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
        <div className="about-skill"><p>React Js</p><hr style={{width: "70%"}} /></div>
        <div className="about-skill"><p>Javascript</p><hr style={{width: "60%"}} /></div>
        <div className="about-skill"><p>Java+DSA</p><hr style={{width: "50%"}} /></div>
       </div>

      </div>
     </div>
     
    <div className="about-achive">
     <div className="about-achivement">
      <h1>5+</h1>
      <p>YEARS OF EXPERIENCE </p>
     </div>
     <hr />
     <div className="about-achivement">
      <h1>10+</h1>
      <p>PROJECT COMPLETED  </p>
     </div>
     <hr />
     <div className="about-achivement">
      <h1>15+</h1>
      <p>HAPPY CLIENTS  </p>
     </div>
    </div>

     </div>
   )
}
export default About