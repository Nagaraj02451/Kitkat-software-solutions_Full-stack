import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <section id="about" className="about">
  <div className="container"  data-aos="fade-left" data-aos-duration="2000">

    <div className="row no-gutters" >
      <div className="col-lg-6 video-box">
        <img src="/images/Aboutus.jpg" className="img-fluid aboutlogo " alt='About'/>
        <Link to="https://www.youtube.com/watch?v=xlJBEv00GCI" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></Link>
      </div>

      <div className="col-lg-6 d-flex flex-column abotop justify-content-center about-content" >

        <div className="section-title" >
          <h2>About Us</h2>
          <h4>We Create, Design and Make it Real</h4>
          <p>Clients are made integral part of our team while executing the projects. This makes the audacious task of the software development and execution much simpler and easier, in tune with the client’s expectation.
          Agile software development is a set of principles for software development in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams.</p>
        </div>

        <div className="icon-box" >
          <div className="icon"><i className="fa fa-laptop"></i></div>    
          <h4 className="title"><Link to="/website">Website</Link></h4>
          <p className="description">A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.</p>
        </div>

        <div className="icon-box">
          <div className="icon"><i className="fa fa-pencil"></i></div>
          <h4 className="title"><Link to="/website">Design</Link></h4>
          <p className="description">Design means to create a plan or sketch of something that is going to be made later, especially a plan that details what the finished thing will do and look like</p>
        </div>

      </div>
    </div>

  </div>
</section>
<section className="about-lists">
  <div className="container">

    <div className="row no-gutters">

      <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up">
        <span>01</span>
        <h4>Our Skills</h4>
        <p>KITKAT is established primarily to carry out the offshore software development projects and registered as a 100% Software export unit. KITKAT has successfully delivered medium and large size projects on time and under budget using the Offshore Delivery Model with the help of Managerial and Technical skill sets. With an experience of over 5+ years now, KITKAT has adapted to various changes to understand the cross culture needs of the region specific customers.</p>
      </div>

      <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="100">
        <span>02</span>
        <h4>Our Vision</h4>
        <p>To be a premier information technology solutions and services provider, by excelling in fulfilling the needs of its customers, partners and employees, by providing the most efficient and effective services and solutions, utilizing the best resources. We provide highly qualified and experienced Resources at a fraction of onsite prices. We meet any challenging schedule using our large pool of Offshore resources.</p>
      </div>

      <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
        <span>03</span>
        <h4>Our Mission</h4>
        <p>Our mission is to progressively realize our vision by providing innovative, proactive, efficient, cost-effective, quality solutions and services to our clients all over the world and by building a strong internal value system that provides the transparency and integrity in all the transactions among our employees, partners and customers.</p>
      </div>

      <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up" data-aos-delay="300">
        <span>04</span>
        <h4>Our Offerings</h4>
        <p>We offer end-to-end solutions to the customers from Hardware to Software,Network to Live Remote-Support,Embedded Systems to Project Assistance.
           We work meticlously to provide best in class services.</p>
      </div>

    </div>

  </div>
</section>
<section className="counts section-bg">
  <div className="container">

    <div className="row">

      <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
        <div className="count-box">
        <Link to="/clients"><i className="fa fa-smile-o "></i></Link>
          <Link to="/clients"> <p>Happy Clients</p></Link>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
        <div className="count-box">
        <Link to="/projects"><i className="fa fa-folder" ></i></Link>
          <Link to="/projects"><p>Projects</p></Link>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
        <div className="count-box">
        <Link to="/hours"><i className="fa fa-laptop"></i></Link>
          <Link to="/hours"><p>Hours Of Support</p></Link>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
        <div className="count-box">
        <Link to="/hard"><i className="fa fa-user" ></i></Link>
          <Link to="/hard"><p>Hard Workers</p></Link>
        </div>
      </div>

    </div>
 

  </div>
</section>
    </>
  )
}

export default About