import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Minibanking() {
  return (
    <>
  <section className='android'>
        <div className='back'>
        <div className='container'>
          <h2>Mini Banking</h2>
          <h1>Mini Banking - What is Mini Banking?</h1>
        </div>
        <img src="/images/medi.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Mini Banking</h1>
              <p>Electronic Commerce Solutions Key Modules</p>
            </div>

            <p>With our mini banking system, you'll have complete control over your transactions and other business data. The software is powerful and effective, and many companies have succeeded in their business endeavors by implementing the software. The software caters to all types of businesses—from small enterprises to large corporate houses. This type of software has become increasingly popular, particularly because of its ability to handle a wide range of financial transactions. We have built one of the best mini banking software programs, which offers the highest amount of security. This type of company deals with highly secured financial data.</p>
            <p>
               Member/Associate - This section provides an option for adding new members or associates as well as removing or deleting a member or associate. You can view all kinds of details about each member or associate in this section.
            </p>
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

export default Minibanking