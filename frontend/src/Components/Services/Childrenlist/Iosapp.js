import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Iosapp() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>IOS App Development</span>
          <h1>IOS App Development - What is IOS App Development?</h1>
        </div>
        <img src="/images/apple.png" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>IOS App Development</h1>
              <p>IOS Application Development</p>
            </div>

            <p>IOS Application Development is growing rapidly in the market, allowing for easy interaction and instant effective communication. The recent trend of integrated app stores within smartphones is crucial. A mobile application is the most effective way to engage your target audience on a more personal level. A mobile application is also far more conversion-friendly than a website because installation indicates that a user is interested in your company. That is why user is downloading and installing your application.</p>
            <p>Our expert designers and developers will collaborate with you to ensure that your iOS application is designed and implemented based on your business requirements and has a UI that is competitive with the best apps on the market. </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/apple2.webp' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Iosapp