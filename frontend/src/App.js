import React from 'react'
import "./App.css"
import Pages from './Components/Pages/Pages'
import aos from "aos"
import 'aos/dist/aos.css';
import SupportEngine from './Components/Supportengine/Index';

aos.init()
function App() {
  return (
     <>
     <Pages />
     <SupportEngine />  
     </>
  )
}
export default App