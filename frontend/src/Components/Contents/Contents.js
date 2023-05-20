import React from 'react'
import Services from '../Services/Services'
import Products from '../Products/Products'
import Contact from '../Contactus/Contact'
import Ourspecial from './Ourspecial'
import Special from './Special'

function Contents() {
  return (
   <>
<main id="main">
  <Special />
  <Ourspecial />
  <Services />
  <Products />
  <Contact />
  </main>
   </>
  )
}

export default Contents