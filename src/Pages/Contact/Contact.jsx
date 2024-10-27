import React from 'react'
import about from '../../assets/about.png'
import call from '../../assets/call.png'
import location from '../../assets/location.png'
import mail from '../../assets/mail.png'
import './Contact.css'


const Contact = () => {

  // contact email verify start 
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
///// contact verify end


  return (
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
  )
}

export default Contact