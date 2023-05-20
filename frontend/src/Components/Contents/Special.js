import React from 'react'
import "./Special.css"

function Special() {
  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="section-title">
          <h1 className='font-weight-bold' data-aos="fade-left"
              data-aos-duration="2000">We’re <span className='text-danger'>NOT</span> just an ordinary IT Company
              Our Methods and Approaches are<span className='text-danger'> PROVEN</span></h1>
        <br />

          <p data-aos="fade-left"
              data-aos-duration="2000">Our first step is requirements analysis, involves frequent communication with clients to determine their specific expectations of their requirement
             Next, the design functions and operations are described in detail, including screen layouts, business rules, process diagrams.
            The last phase Develop and Deployment and we wont compromise on quality that we deliver.</p>
        </div>

        <br />
        <br />
        

        <div className="row portfolio-container">

               <div className="col-lg-4 col-md-6 portfolio-item ">
            <div className="portfolio-wrap" data-aos="fade-left"
              data-aos-duration="2000">
              <img src="/images/req.jpg" className="img-fluid imgproduct" alt="" />
              <div className="portfolio-info ">
                <h3>Requirement Gathering</h3>
                <h4>Technology</h4>
              </div>
            </div>
            

          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-up"
              data-aos-duration="2000">
            <div className="portfolio-wrap">
              <img src="/images/any.jpg" className="img-fluid " alt="" />
              <div className="portfolio-info ">
                <h3>Analysis & Design</h3>
                <h4>Security</h4>
              </div>
            </div>
          </div>
          

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-aos="fade-right"
              data-aos-duration="2000">
            <div className="portfolio-wrap">
              <img src="/images/dev.png" className="img-fluid imgproduct" alt="" />
              <div className="portfolio-info ">
                <h3>Develop & Deploy</h3>
                <h4>Design</h4>
              </div>
              
            </div>
            
          </div>
         
           </div>
           
      </div>
    
    </section>
    
    </>
  )
}

export default Special