import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

function Header() {
  return (
   <>
    <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="fa fa-envelope"></i><Link to="#" >kitkatsoft@example.com</Link>
           <i className="fa fa-mobile mobile"></i>+91 9080 9109 71 
      </div>
      <div className="social-links d-none d-md-block">
        <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
        <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
        <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
        <Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>

      </div>
    </div>

  </section>

   </>
  )
}

export default Header