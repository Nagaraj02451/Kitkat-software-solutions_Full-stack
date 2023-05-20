import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Bulksms() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>Bulksms</span>
          <h1>Bulksms - What is Bulksms?</h1>
        </div>
        <img src="/images/bull sms.webp" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Bulksms</h1>
              <p>Promotional SMS Services, Transactional SMS Services, Branding SMS Services </p>
            </div>

            <p> BULK SMS Marketing is one of the most efficient, dependable, and cost-effective methods of marketing to your customers and businesses. This is the most straightforward method of promotion. This is utilized throughout the world and has received positive feedback from users.  </p>
            <p>Bulk SMS, also known as mass text messaging, is a method of communicating with hundreds or thousands of contacts at the same time. Regardless of your company's size, budget, or industry, mass SMS can produce results. Bulk texting allows you to save time and effort by sending the same message to different segments of your audience. Kitkat Software Technologies in Coimbatore provides the best bulk text message service, as well as a variety of marketing tools. </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/bulksms2.webp' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Bulksms