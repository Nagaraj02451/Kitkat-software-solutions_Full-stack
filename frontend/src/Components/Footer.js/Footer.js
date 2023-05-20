import React, { useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import axios from 'axios'
import "./Footer.css"

function Footer() {
  const[sub , setsub] = useState("")
  const navigate = useNavigate()

  const url = "http://localhost:4000/api/Viewsubscriber"

  const submit = (e)=>{

    e.preventDefault();
    axios.post(url , {
      email : sub
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch(()=>{
     console.log("Invalied");
    })
    navigate("/")
    alert("Subscribe successfully")

  }
  return (
    <>
      <footer id="footer" data-aos="fade-up" data-aos-duration="2000">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info" data-aos="fade-up" data-aos-duration="3000">
            <h3>Kitkat_Software_Solution</h3>
            <p>
              Lakshmi Mills 2nd Street <br/>
              TN 535022, Coimbatore<br/><br/>
              <strong>Phone:</strong> +1 9080 9108 71<br/>
              <strong>Email:</strong> kitkatsoftware@.com<br/>
            </p>
            <div className="social-links mt-3">
              <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
              <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
              <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
              <Link to="#" className="google-plus"><i className="fa fa-skype"></i></Link>
              <Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links" data-aos="fade-up" data-aos-duration="3000">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fa fa-chevron-right"></i> <Link to="/">Home</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/about">About us</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/services">Services</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/products">Terms of service</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/contact">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-duration="3000">
            <h4>Our Services</h4>
            <ul>
              <li><i className="fa fa-chevron-right"></i> <Link to="/customized">Web Design</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/website">Web Development</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/webhost">Product Management</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/ecommerce">Marketing</Link></li>
              <li><i className="fa fa-chevron-right"></i> <Link to="/crm">Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter" data-aos="fade-up" data-aos-duration="3000">
            <h4>Our Newsletter</h4>
            <p>Email_Subscribe</p>
            <form onSubmit={(e)=>submit(e)}>
              <input type="email" value={sub} onChange={(e)=>setsub(e.target.value)} name="email" /><input type="submit" value="Subscribe" />
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="container" data-aos="fade-left" data-aos-duration="2000">
      <div className="copyright">
        &copy; Copyright <strong><span>Surya_Developer</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <Link to="">Surya</Link>
      </div>
    </div>
    <h2 className='arrow' data-aos="fade-up"
              data-aos-duration="2000"><Link to="/about"><i className='fa fa-arrow-up' ></i></Link></h2>

  </footer>

    </>
  )
}

export default Footer