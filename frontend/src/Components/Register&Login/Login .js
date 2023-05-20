import React, { useState } from 'react'
import { useNavigate} from "react-router-dom"
import axios from 'axios'

function Login ({password}) {
  const url = "http://localhost:4000/api/View"
  const navigate = useNavigate()
    
  const [ user, setUser] = useState("")
  const [ Pass, setPass] = useState("")

  function submit(e){
    e.preventDefault();

    if(Pass === password){
      navigate("/")
      alert(`Welcome to Kitkat software solution - ${user}`)
  }

    axios.post(url , {
     email : user,
     password : Pass
     
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch(()=>{
     console.log("Invalied");
    })   
 }

  return (
   <>

<section className='container col-6'>
        <div className="top-img"></div>
        <form className="col-lg-5 col-md-7 col-sm-8 col-10 shadow bg-white p-5 text-center container" onSubmit={(e)=>submit(e)} >
            <h1 className="mb-5">Login</h1>
            <input type="text" className="form-control " value={user} onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter Email"  />
            <br />
            <input type="password" className="form-control " value={Pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter Password"  />
            <br />
            <button className="btn btn-success" type='submit'>Login</button>
            <br />
            <br />

        </form>
    </section>

   </>
  )
}

export default Login 