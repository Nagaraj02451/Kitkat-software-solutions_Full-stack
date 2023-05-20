import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Webhost() {
  return (
    <>
   <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>Web Hosting</span>
          <h1>Web Hosting - What is Web Hosting?</h1>
        </div>
        <img src="/images/webh.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Web Hosting</h1>
              <p>Web hosting is a service that allows businesses and individuals </p>
            </div>

            <p> Web hosting is a service that allows businesses and individuals to publish their websites or web pages on the Internet. A web host, also known as a web hosting service provider, is a company that offers the technologies and services required for a website or webpage to be viewed on the Internet. Websites are hosted, or saved, on specialised computers known as servers. All Internet users need to do to view your website is type your website address or domain into their browser. After that, their computer will connect to your server, and your webpages will be delivered to them via the browser. Best hosting service provider gives easy to use and host any website services.  </p>
            <p>We provide Web hosting services to ensure that our clients' websites are available 24 hours a day, seven days a week. Furthermore, when website owners require assistance or troubleshooting (e.g., script debuting, email not being able to send/receive, domain name renewal, and so on), the web host's in-house support is the go-to person</p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/webh1.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Webhost