import {BrowserRouter , Routes , Route} from "react-router-dom"
import FrontPage from "../FrontPage/FrontPage"
import Header from "../Header/Header"
import Navbar from "../Navbars/Navbar"
import Footer from "../Footer.js/Footer"
import About from "../About/About"
import Services from "../Services/Services"
import Contact from "../Contactus/Contact"
import Products from "../Products/Products"
import Career from "../Career/Career"
import Biometric from "../Products/Childrenlist/Biometric"
import Ecommerce from "../Products/Childrenlist/Ecommerce"
import Office from "../Products/Childrenlist/Office"
import Minibanking from "../Products/Childrenlist/Minibanking"
import Travel from "../Products/Childrenlist/Travel"
import Pofp from "../Products/Childrenlist/Pofp"
import Gold from "../Products/Childrenlist/Gold"
import Medicalbill from "../Products/Childrenlist/Medicalbill"
import CustomizedWeb from "../Services/Childrenlist/CustomizedWeb"
import Website from "../Services/Childrenlist/Website"
import Webhost from "../Services/Childrenlist/Webhost"
import Android from "../Services/Childrenlist/Android"
import Iosapp from "../Services/Childrenlist/Iosapp"
import Bulksms from "../Services/Childrenlist/Bulksms"
import Crm from "../Services/Childrenlist/Crm"
import Erp from "../Services/Childrenlist/Erp"
import Hrm from "../Services/Childrenlist/Hrm"
import Clients from "../Contents/Clients/Clients"
import Hours from "../Contents/Clients/Hours"
import Projects from "../Contents/Clients/Pro"
import Register from "../Register&Login/Register"
import Hard from "../Contents/Clients/Hard"
import JobForm from "../Career/JobDetails/JobForm"
import MoreBiometric from "../Products/Childrenlist/MoreBiometric"


function Pages() {

  return (
     <>
     <BrowserRouter>
     <Header />
     <Navbar />
     <Routes>
        <Route path="/" element = {<FrontPage/>}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/services" element = {<Services />}></Route>
            <Route path="/customized" element={<CustomizedWeb />}></Route>
            <Route path="/website" element ={<Website />}></Route>
            <Route path="/webhost" element ={<Webhost />}></Route>
            <Route path="/android" element ={<Android />}></Route>
            <Route path="/iosapp" element ={<Iosapp />}></Route>
            <Route path="/bulksms" element ={<Bulksms />}></Route>
            <Route path="/crm" element ={<Crm />}></Route>
            <Route path="/erp" element ={<Erp />}></Route>
            <Route path="/hrm" element ={<Hrm />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
        <Route path="/products" element = {<Products />}></Route>
            <Route path="/biometric" element ={<Biometric />} ></Route>
            <Route path="/ecommerce" element={<Ecommerce />}></Route>
            <Route path="/office" element={<Office />}></Route>
            <Route path="/minibanking" element={<Minibanking />}></Route>
            <Route path="/travel" element = {<Travel />} ></Route>
            <Route path="/pos" element={<Pofp />}></Route>
            <Route path="/gold" element = {<Gold />} ></Route>
            <Route path="/medicalbill" element = {<Medicalbill />}></Route>
        <Route path="/career" element = {<Career />}></Route>
        <Route path="/clients" element = {<Clients />}></Route>
        <Route path="/hours" element = {<Hours />}></Route>
        <Route path="/projects" element = {<Projects />}></Route>
        <Route path="/register" element = {<Register />}></Route>
        <Route path="/hard" element = {<Hard />}></Route>
        <Route path="/jobdetails" element = {<JobForm />}></Route>
        <Route path="/morebio" element = {<MoreBiometric />}></Route>
     </Routes>
    
     <Footer />
     </BrowserRouter>
     </>
  )
}

export default Pages

