import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"

function Gold() {
  return (
    <>
      <section className='android'>
        <div className='back'>
        <div className='container'>
          <h2>Gold Loan Management</h2>
          <h1>Gold Loan Management - What is Gold Loan Management?</h1>
        </div>
        <img src="/images/ecommerce.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Gold Loan Management</h1>
              <p>Electronic Commerce Solutions Key Modules</p>
            </div>

            <p>E-commerce is the process of buying and selling merchandise via electronic means, such as the Internet, mobile applications, and other online platforms. It refers to both e-retail and electronic transactions. While most people think of e-commerce as business-to-consumer (B2C), there are a number of other types of e-commerce.</p>
            <p>Business to Consumer (B2C) – Business to consumer (B2C) is a transaction between a business and an end-user or consumer. This includes selling directly to consumers via catalogs, website sales, or selling directly in brick and mortar stores. It also includes purchasing products from a website that is not someone’s personal page or blog, but an actual store. Most people who think about eCommerce think primarily about B2C transactions because these are the ones that are publicized most often. However, this is only one type of eCommerce.</p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/ecomtwo.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Gold