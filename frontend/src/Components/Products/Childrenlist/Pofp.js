import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"

function Pofp() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <h2>POS on billing</h2>
          <h1>POS on billing - What is POS on billing?</h1>
        </div>
        <img src="/images/erpo.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>POS on billing</h1>
              <p>POS (Point On Sale) on Billing Software</p>
            </div>

            <p> A point of sale system is a combination of software and hardware that allows merchants to take transactions and simplify key day-to-day business operations
                Shoppers today look forward to a greater exit experience as much as the in-store experience. Unmatched billing speed aided with integration to all POS accessories.</p>
            <p>Now travelers need less hand-holding and more knowledge with higher service levels. This means business models are changing in every link of the travel service chain and the travel technologies that sufficed twenty – or even ten – years ago simply won’t do the job anymore. </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/pos.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Pofp