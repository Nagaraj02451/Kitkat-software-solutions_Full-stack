import React from 'react'

function ProductAdd({cart}) {
  return (
    <>
  
     <article>
     
        {
        
            cart?.map((item)=>(
              
              <section id="contact" className="contact">
              <div className="containe" data-aos="fade-up">
                <div className="section-title">
              <div>Sellected Cart items</div>
                <br />
                  <image src={item.image} alt='image'/>
                <br />

                  <h2>{item.titile}</h2>
                </div>
        
              </div>
            </section>
            ))}
        
    </article>
    </>
  )
}

export default ProductAdd