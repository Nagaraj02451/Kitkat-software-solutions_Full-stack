import React from 'react'
import {Link} from "react-router-dom"
import "./back.css"


function CustomizedWeb() {
  return (
    <>
   <section className='android'>
        <div className='back'>
        <div className='container'>
          <span>CustomizedWeb</span>
          <h1>CustomizedWeb - What is CustomizedWeb?</h1>
        </div>
        <img src="/images/cus.jpg" alt='' className='imgbio' />
      </div>
      <br />
      <br />
        <div className='container flex mtop'>
          <div className='left row col-md-6'>
            <div className='heading'>
              <br />
              <h1>CustomizedWeb</h1>
              <p>Customized Web Development</p>
            </div>

            <p> Kitkat Software Technologies is a leading Professional web designing company in Coimbatore that has been successfully providing Web Design Services to our clients for over 8 years and employs the most experienced professionals. Kitkat Software Technologies creates professional websites by implementing the most powerful and cutting-edge technologies to enhance your online presence. We are happy to serve you if you need a Creative e-commerce website, Advanced professional website, Top custom designed website, or a Basic website.</p>
            <p>Custom website design solutions may be the best option for clients who want high-quality designs and a website that stands out from the crowd. Kitkat Software Technologies is a one-stop firm for custom web design.</p>
            <button className='btn2 container'><Link to="/morebio" className='text-light'>More Details</Link></button>
          </div>
          <div className='right row col-md-6 set'>
            <img src='./images/cus2.jpeg' alt='' className='imgbio img-fluid rounded'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomizedWeb