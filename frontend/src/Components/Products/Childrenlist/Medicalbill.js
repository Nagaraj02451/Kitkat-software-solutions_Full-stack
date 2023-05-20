import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Medicalbill() {
  return (
   <>
   <section className='android'>
        <div className='back'>
        <div className='container'>
          <h2>Medical billing</h2>
          <h1>Medical billing - What is Medical billing?</h1>
        </div>
        <img src="/images/medi.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Medical billing</h1>
              <p>Electronic Commerce Solutions Key Modules</p>
            </div>

            <p>Worry less about your practice and more about your patients.We have the simple and worry-free solution to your practice management, scheduling, and claim filing needs allowing you to concentrate on what’s really important without having to worry about complex systems. This one software is able not only to keep your practice running smooth, but also increase your offices income?</p>
            <p>Today healthcare industry is growing rapidly due to which various public and private sector businesses are investing as well as participating in it at large scale. This significant growth enabled hospitals to use latest technologies like software in their health care centre to give better health care services to patients. As Enterprise Resource Planning is offering ultimate solutions to many sectors, hence healthcare industry is no exception.</p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/medio.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
   </>
  )
}

export default Medicalbill