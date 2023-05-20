import React from 'react'
import "./FrontPage.css"
import {Link} from "react-router-dom"
import Contents from '../Contents/Contents'


function FrontPage() {


  return (
    <>
    <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2300">

        <div className="carousel-inner " role="listbox">

          <div className="carousel-item  imgsourse active" >
            <div className="carousel-container  animate">
              <div className="carousel-content container" data-aos="fade-up"
              data-aos-duration="2000">
                <h2>Welcome to <span>Kitkat_Software_Solution</span></h2>
                <p  >KITKAT Software technologies are proficient at Web development, Application development, Creative designs, Quality checking, Banking services, and Billing. We offer a vast array of services, so each client could find one of the best suits for their needs. According to your project requirements, Our project team can create fully custom websites and also we help with the regular maintenance of your website.</p>
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
            </div>
          </div>

          <div className="carousel-item imgsourseTwo " >
            <div className="carousel-container animate">
              <div className="carousel-content container" data-aos="fade-up"
              data-aos-duration="4000">
                <h2 >Products</h2>
                <p >A product is any item or service you sell to serve a customer’s need or want. Biometric , E-commerce , Mini banking , Gold loan management , Travel Erp , Medical Billing , POS on Billing , Office ERP</p>
                <Link to="/products" className="btn-get-started ">Read More</Link>
              </div>
            </div>
          </div>

          <div className="carousel-item imgsourseThree" >
            <div className="carousel-container animate">
              <div className="carousel-content container" data-aos="fade-up"
              data-aos-duration="6000">
                <h2 >Services</h2>
                <p >Noun. An act of helpful activity; help; aid: to do someone a service. the supplying or supplier of utilities or commodities, as water, electricity, or gas, required or demanded by the public. Customized Web , Website design and development , Web hosting , Android application development , IOS application development, Bulk SMS , CRM , ERP , HRM</p>
                <Link to="/services" className="btn-get-started ">Read More</Link>
              </div>
            </div>
          </div>

        </div>

        <Link className="carousel-control-prev" to="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon fa fa-chevron-left" aria-hidden="true"></span>
        </Link>
        <Link className="carousel-control-next" to="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon fa fa-chevron-right" aria-hidden="true"></span>
        </Link>

      </div>
    </div>
    
  </section>
  <Contents />
    </>
  )
}

export default FrontPage