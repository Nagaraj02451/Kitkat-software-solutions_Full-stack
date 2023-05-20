import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"

function Travel() {
  return (
   <>
  <section className='android'>
        <div className='back'>
        <div className='container'>
          <h2>Travel ERP</h2>
          <h1>Travel ERP - What is Travel ERP?</h1>
        </div>
        <img src="/images/travel.png" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Travel ERP</h1>
              <p>Travel ERP (Enterprise Resource Planning)</p>
            </div>

            <p> To the public eye travel is a straightforward concept focused on destinations, activities, tickets and itineraries. For those who work in the travel industry it’s always been a complicated set of interrelationships between retailers, wholesalers and service providers – made, if anything, even more challenging by the global reach of the Internet.  </p>
            <p>Two of the more visible ways the Internet has changed the travel are:
               * raised customer expectations for a unique and amazing travel experience; </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/trav.webp' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
   </>
  )
}

export default Travel