import React, { useState } from 'react'
import axios from 'axios'
import "./Contact.css"

function Contact() {

  const url = "http://localhost:4000/api/Contact"

  const[name , setName] = useState("")
  const[email , setEmail] = useState("")
  const[subject , setSubject] = useState("")
  const[message , setMessage] = useState("")

const submit =(e)=>{
  e.preventDefault();
    axios.post(url , {
      name : name,
      email : email,
      subject : subject,
      message :message
     
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch(()=>{
     console.log("Invalied");
    })
    alert("Information stored successfully")
}

  return (
    <>
    <section id="contact" className="contact">
      <div className='con container'></div>
      <br/>
      <br/>
      <div className="container" data-aos="fade-up" data-aos-duration="2000">

        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row">

          <div className="col-lg-6 d-flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="info-box">
              <i className="fa fa-map"></i>
              <h3>Our Address</h3>
              <p>HI9522, Lakshmi Mills, Gandhipuram, Coimbatore</p>
            </div>
          </div>

          <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-duration="2000">
            <div className="info-box">
              <i className="fa fa-envelope"></i>
              <h3>Email Us</h3>
              <p>kitkat@example.com<br />kitkattwo@example.com</p>
            </div>
          </div>

          <div className="col-lg-3 d-flex" data-aos="fade-left" data-aos-duration="2000">
            <div className="info-box ">
              <i className="fa fa-phone"></i>
              <h3>Call Us</h3>
              <p>+91 9080 9109 71<br />+91 9047 6453 59</p>
            </div>
          </div>

          <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
            <form  onSubmit={(e)=>submit(e)} method='POST' action='/contact' className="php-email-form">
              <div className="row">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)} name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" required />
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Contact