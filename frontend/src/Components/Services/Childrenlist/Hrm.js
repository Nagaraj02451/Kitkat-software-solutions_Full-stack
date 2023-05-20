import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Hrm() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>Human Resource Management (HRM)</span>
          <h1>Human Resource Management (HRM) - What is Human Resource Management (HRM)?</h1>
        </div>
        <img src="/images/hrm.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Human Resource Management (HRM)</h1>
              <p>Responsibilities of human resources management</p>
            </div>

            
            <p> A point of sale system is a combination of software and hardware that allows merchants to take transactions and simplify key day-to-day business operations
                Shoppers today look forward to a greater exit experience as much as the in-store experience. Unmatched billing speed aided with integration to all POS accessories.
                Operate your business on cloud without installing a Point of sale software, keep your business market ready, have critical business reports delivered to you 24 </p>
            <p>Kitkat Software Technologies' HRM product delivers a unified new age platform for an engaged workforce, complete with features for successfully driving long-term performance and well-being at work. </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/hrm2.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hrm