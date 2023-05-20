import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"

function Android() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>Android</span>
          <h1>Android - What is Android?</h1>
        </div>
        <img src="/images/And.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Android</h1>
              <p>Android App Development</p>
            </div>

            <p> Kitkat software technologies in Coimbatore has a team of Android developers who provide high performance functionality as well as influential looks for Android app development. When you choose us for Android app development, you will be working with the best industry because we are a dependable and honest Android app development company. </p>
            <p>To create the most competitive Android applications, we employ cutting-edge methods and world-class technologies. We enjoy stepping outside of our comfort zone to develop applications that meet our customers' needs. </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/Androidfive.webp' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Android