import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function Erp() {
  return (
    <>
    <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>Enterprise resource planning (ERP)</span>
          <h1>Enterprise resource planning (ERP) - What is Enterprise resource planning (ERP)?</h1>
        </div>
        <img src="/images/erp.avif" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>Enterprise resource planning (ERP)</h1>
              <p>Our ERP development process</p>
            </div>

            <p> Enterprise Resource Planning (ERP) systems are software systems that aid in the planning, administration, and optimisation of internal business processes such as manufacturing, supply chain, financials, customer relationship management, human resources, and warehouse management. A typical ERP software integrates an organization's data and processes into a single unified system with the help of these solutions. </p>
            <p>We offer the best ERP system for large and small businesses, as well as SME ERP software to meet the needs of all business types. We provide custom ERP development services, along with horizontal and vertical ERP development services tailored to your business's requirements.  </p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/erp2.jpg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Erp