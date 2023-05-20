import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Website() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>Web Designing And Web Development</span>
          <h1>Web Designing And Web Development - What is Web Designing And Web Development?</h1>
        </div>
        <img src="/images/webs.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Web Designing And Web Development</h1>
              <p>Customized Webdite Designing And Web Development</p>
            </div>

            <p> Kitkat Software Technologies is a well-known website builder in Coimbatore, providing affordable web design services to both small and large businesses, as well as individuals. We provide more than just website design; we also bring you more potential customers. Our team creates SEO-friendly web design strategies. We perform quality control checks to ensure excellent results. </p>
            <p>We are one of the most reputable real-time web development companies in Coimbatore. You've come to the right place if you're looking for an expert to solve your business problems. </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/webs2.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Website