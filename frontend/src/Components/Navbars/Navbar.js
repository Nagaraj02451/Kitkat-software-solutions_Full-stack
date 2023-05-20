import React, { useState } from 'react'
import { Link , Outlet } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const [navList, setNavList] = useState(false)
  return (
    <>
     <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <div className="logo  me-auto">
       <Link to="/"> <img src="./images/kitkatlogo.jpg" alt='Kitkat' /></Link>
      </div>
      <nav id="navbar" className={navList? "small" : "flex"}>
        <ul className='ulon'>
          <li><Link to="/" className="nav-link scrollto active" >Home</Link></li>
          <li><Link to="/about"  className="nav-link scrollto" >About</Link></li>
          <li className="dropdown"><Link to="/products"><span>Products <i className="bi bi-chevron-down"></i></span> </Link>
            <ul className="sidenav">
              <li><Link to="/biometric">Biometric Based HRM</Link></li>
              <li><Link to="/ecommerce">E-Commerce</Link></li>  
              <li><Link to="/office">Office ERP</Link></li>
              <li><Link to="/minibanking">Mini Banking</Link></li> 
              <li><Link to="/travel">Travel ERP</Link></li>
              <li><Link to="/pos">POS on Billing</Link></li>
              <li><Link to="/gold">Gold Load Management</Link></li>
              <li><Link to="/medicalbill">Medical billing</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link to="/services"><span>Services<i className="bi bi-chevron-down"></i></span> </Link>
            <ul className="sidenav"> 
              <li><Link to="/customized">Customized Web</Link></li>
              <li><Link to="/website">Website Design And Development</Link></li>  
              <li><Link to="/webhost">Web Hosting</Link></li>
              <li><Link to="/android">Android Application Development</Link></li>
              <li><Link to="/iosapp">IOS Application Development</Link></li>
              <li><Link to="/bulksms">Bulk SMS</Link></li>
              <li><Link to="/crm">CRM</Link></li>
              <li><Link to="/erp">ERP</Link></li>
              <li><Link to="/hrm">HRM</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link to="/services"><span>Account<i className="bi bi-chevron-down"></i></span> </Link>
            <ul className="sidenav"> 
              <li><Link to="/register">Registration & Login</Link></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto" to="/career">Career</Link></li>
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
    
        </ul>

        <div className='mobile-nav-toggle'>
            <h2 onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</h2>
          </div>
      
      </nav>
   <Outlet />
    </div>
  </header>
    </>
  )
}

export default Navbar