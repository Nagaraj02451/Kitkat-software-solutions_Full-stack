import React from 'react'
import {Link} from "react-router-dom"

function Services() {
  return (
     <>
     <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><Link to="/android"><i className="bi bi-android"></i></Link></div>
            <h4 className="title"><Link to="/android">Android Application</Link></h4>
            <p className="description">Android operating system is the largest installed base among various mobile platforms across the globe. Hundreds of millions of mobile devices are powered by Android in more than 190 countries of the world.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><Link to="/iosapp"><i className="bi bi-apple"></i></Link></div>
            <h4 className="title"><Link to="/iosapp">IOS Application</Link></h4>
            <p className="description">iOS is Apple’s mobile OS that runs on an iPhone, iPad, iPod Touch hardware. Apple provides tools and resources for creating iOS apps and accessories for these devices.Front-End UI to the Backend With Minimal Coding</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><Link to="/bulksms"><i className="bi bi-book"></i></Link></div>
            <h4 className="title"><Link to="/bulksms">Bulk SMS</Link></h4>
            <p className="description">. Access your online account from any web browser. SMS Integrations. Two-way SMS functionality that integrates with multiple platforms.Join 225000+ Businesses in Sending Bulk SMS Offers. Instant OTPs, Weblinks & Images!</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><Link to="/website"><i className="fa fa-desktop"></i></Link></div>
            <h4 className="title"><Link to="/website">Website Design and Developement</Link></h4>
            <p className="description">Web design and development is an umbrella term that describes the process of creating a website. Like the name suggests, it involves two major skill sets: web design and web development.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><Link to="/webhost"><i className="bi bi-laptop"></i></Link></div>
            <h4 className="title"><Link to="/webhost">Web Hosting</Link></h4>
            <p className="description">We provide world-class features for SEO, website speed and security. Looking for website domain and hosting? Get an all-inclusive plan and go live instantly!</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><Link to="/crm"><i className="fa fa-user"></i></Link></div>
            <h4 className="title"><Link to="/crm">CRM</Link></h4>
            <p className="description">Customer relationship management (CRM) is a technology for managing all your company’s relationships and interactions with customers and potential customers. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><Link to="/customized"><i className="fa fa-user-circle-o"></i></Link></div>
            <h4 className="title"><Link to="/customized">Customized Website</Link></h4>
            <p className="description">A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><Link to="/erp"><i className="bi bi-briefcase"></i></Link></div>
            <h4 className="title"><Link to="/erp">ERP</Link></h4>
            <p className="description">Enterprise resource planning (ERP) is the integrated management of main business processes, often in real time and mediated by software and technology. </p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><Link to="/hrm"><i className="fa fa-user-md"></i></Link></div>
            <h4 className="title"><Link to="/hrm">HRM</Link></h4>
            <p className="description">This article provides a comprehensive overview of human resource management (HRM), including its definition, roles and responsibilities, salary, career paths, education requirements and certifications.  </p>
          </div>
        </div>

      </div>
    </section>
     </>
  )
}

export default Services