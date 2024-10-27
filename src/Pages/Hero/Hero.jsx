import React from "react";
import about from '../../assets/about.png';
import arrow from '../../assets/arrow.png';
import profile from "../../assets/profile.png";
import profiles from '../../assets/profiles.png';
import "./Hero.css";

import pro1 from '../../assets/pro1.jpg';
import pro2 from '../../assets/pro2.png';
import pro3 from '../../assets/pro3.png';
import pro4 from '../../assets/pro4.png';
import pro5 from '../../assets/pro5.jpg';
import pro6 from '../../assets/pro6.jpg';

import call from '../../assets/call.png';
import location from '../../assets/location.png';
import mail from '../../assets/mail.png';

const Hero = () => {
//  Contact Javascriptt codes 

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "7433e118-c21a-4e7b-b200-8e328ebf09a5");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    alert(res.message);
  }
};
 
  return (
    <div>         

    <div id="hero" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span> I am Puja,</span> Front-end Developer based in <span>India</span>{" "}
      </h1>
      <p>
        I am Frontend Developer from Patna , India with 5 years experience in
        multiple companies.....
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me </div>
        <div className="hero-resume"> My Resume </div>
      </div>
    </div>

                           {/* about */}

<div  id ="about" className='about'>
<div className="about-title">
 <h1>About Me </h1>
 <img src={about} alt="" />
</div>
<div className="about-sections">
 <div className="about-left">
  <img src={profiles} alt="" />
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
  



                               {/* Services  */}

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
                                {/*  MyWork  */}

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

                              {/*  Contact  */}
                              <div  id ="contact" className='contact'>

<div className="contact-title">
 <h1>Get in Touch </h1>
 <img src={about} alt="" />
</div>

<div className="contact-sections">

<div className="contact-left">
  <h1>Let's Talk </h1>
 <p>I'm currently available to take on new projects, so feel free to send me a messege about anything that you want me to work on. You can contact anytime....</p>

<div className="contact-details">

 <div className="contact-detail">
 <img src={mail} alt="" /><p>pujasah63688@gmail.com</p>
  </div>

  <div className="contact-detail">
 <img src={location} alt="" /><p>Uttrakhand , Dehradun </p>
    </div>

    <div className="contact-detail">
 <img src={call} alt="" /><p>+897698720987</p>
</div>
</div>
</div>

<form onSubmit={onSubmit} className='contact-right'>
<label htmlFor=""> Your Name </label>
<input type="text" placeholder='Enter your Name '  name=" name" />
<label htmlFor="">Your Email</label>
<input type="email" placeholder='Enter Your Email' name="email" />
 <label htmlFor="">Write Your Messege Here..</label>
<textarea name="messege" rows ="8" placeholder='Enter Your Messege'></textarea>
<button type="submit" className='contact-submit'> Submit </button>
</form>
</div>
</div>
                            
 </ div>
  );
};
export default Hero;
