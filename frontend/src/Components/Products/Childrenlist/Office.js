import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Office() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <h2>Office ERM</h2>
          <h1>Office ERM - What is Office ERM?</h1>
        </div>
        <img src="/images/erpo.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Office ERM</h1>
              <p>Enterprise Resource Planning</p>
            </div>

            <p> ERP (enterprise resource planning) describes software that lets an enterprise manage user access to its network resources efficiently. ERP software generally lets a user sign on to different enterprise systems and applications using the same password. </p>
            <p>ERP (enterprise resource planning) also describes software that manages all of a company's assets and resources, including such basic applications as general ledger, accounts payable and receivable, as well as manufacturing, inventory, and human resources. </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/erp.png' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Office