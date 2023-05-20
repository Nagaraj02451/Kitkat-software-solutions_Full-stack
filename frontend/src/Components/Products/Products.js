import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { GalleryData } from './Gallery'
import { useState } from "react"
import "./Products.css"
import ProductAdd from './ProductAdd'



function Products() {
   const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);
	const [cart , setCart] = useState([]);


  const handleClick = (item)=>{
    setCart([...cart, item]);
	}


  useEffect(()=>{
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item)=> item.titile))])
   },[]) 

  
  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile === itemData);
    setData(filterData);
  }


  return (
    <>
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="section-title">
          <h2>Products</h2>
          <p>A product is a named collection of business capabilities valuable to a defined customer segment. A product may be just software and data. Alternatively, it may comprise any combination of software, hardware, facilities and services, as required to deliver the entire product experience.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-duration="2000">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
            <li className="filter-active" onClick={()=> setData(GalleryData)}>All</li>
            {
              collection.map((item , index)=> <li onClick={()=>{gallery_filter(item)}} key={index}>{item}</li>)
            }
          </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-duration="2000">

          {
            data.map((iteam)=> 
               <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={iteam.id}>
            <div className="portfolio-wrap">
              <img src={iteam.image} className="img-fluid imgproduct" alt="" />
              <div className="portfolio-info ">
                <h4>{iteam.titile}</h4>
                <p>{iteam.titile}</p>
                <div className="portfolio-links">
                  <Link data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus" onClick={()=>handleClick(iteam)} ></i></Link>
                  <Link to="/android" title="More Details"><i className="bi bi-link"></i></Link>
                </div>
              </div>
            </div>
          </div>
)
          }
        </div>

      </div>
    </section>

    

    <ProductAdd cart = {cart} />

    </>
    
  )
}


export default Products