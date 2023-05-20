import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Crm() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>Customer Relationship Management (CRM)</span>
          <h1>Customer Relationship Management (CRM) - What is CRM?</h1>
        </div>
        <img src="/images/crm.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Customer Relationship Management (CRM)</h1>
              <p>Custom CRM Development & Customized Solutions </p>
            </div>

            <p> Using Kitkat software technologies and our customer relationship management software, you can optimise your marketing efforts and create a more streamlined experience that is aligned with customer interests and needs. We offer the best CRM software development services in Coimbatore to assist you in identifying hidden opportunities, driving adoption of new features or products, improving the bottom line, and ensuring user satisfaction. </p>
            <p>Customer relationship management (CRM) software solutions are the most important aspect of business operations. With the introduction of new technologies and management systems, the world of business has changed course and dimension.  </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/crm2.avif' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Crm