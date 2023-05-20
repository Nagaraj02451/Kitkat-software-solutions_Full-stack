import React from 'react'
import "./back.css"
import {Link} from "react-router-dom"

function Biometric() {
  return (
    <>
    <section className='android'>
        <div className='back' data-aos="fade-up" data-aos-duration="2000">
        <div className='container' data-aos="fade-left" data-aos-duration="2000">
          <h2>Biometric</h2>
          <h1>Biometric - What is biometric?</h1>
        </div>
        <img src="/images/biomterics.jpg" alt='' className='imgbio'  />
      </div>
      <br />
      <br />
        <div className='container flex mtop '>
       
          <div className='col-md-6 '>
         
            <div className='heading'>
              <br />
              <h1 data-aos="fade-right" data-aos-duration="2000">Biometric</h1>
              <p data-aos="fade-left" data-aos-duration="2000">Biometric Based HRM (Human Resource Management)</p>
            </div>

            <p data-aos="fade-up" data-aos-duration="2000">Biometric technologies are used to analyze and measure characteristics such as voice patterns, hand measurements, and iris patterns. These characteristics are then compared against the stored characteristics of the individual trying to gain access to a building or network; this system allows for accurate identification of an individual's identity down to the tiniest detail. This type of technology allows for accurate identification of employees in order to prevent fraud and theft in the workplace. </p>
            <p data-aos="fade-up" data-aos-duration="2000">When integrated with your human resources software, biometric time and attendance clocks record absences as well as late arrivals. With this information, you can precisely adjust payroll, automatically. And when someone calls in sick, you can use the software to see who’s not scheduled and call in someone else without much interruption in workflow.</p>
            <Link to="/biometric" className='d-flex justify-content-center' data-aos="fade-up" data-aos-duration="2000"><button className='btn2 '><Link to="/morebio" className='text-light' >More Details</Link></button></Link>
          </div>

          <div className=' col-md-6 set' data-aos="fade-right" data-aos-duration="2000">
            <img src='./images/biometric2.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
         
        </div>
      </section>
    </>
  )
}

export default Biometric