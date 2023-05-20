import React, { useState } from 'react'
import axios from "axios"
import Login from './Login '

function Register() {
    const url = "http://localhost:4000/api/Create"

  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [password , setpass] = useState("")
  const [reenterpassword, setreenterpassword] = useState("")

  function submit(e){
     e.preventDefault();
     axios.post(url , {
      name : name,
      email : email,
      password : password,
      reenterpassword : reenterpassword
     })
     .then((res)=>{
       console.log(res.data);
     })
     .catch(()=>{
      console.log("Invalied");
     })
     alert("Registered successfully")
  }

  return (
    <>
    <div className='d-flex row'>
      <section className='container col-6'>
        <div className="top-img"></div>
        <form onSubmit={(e)=>submit(e)} className="col-lg-5 col-md-7 col-sm-8 col-10 shadow bg-white p-5 text-center container" >
        <h1 className="mb-5">Register</h1>

            <input type="text" className="form-control" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name" required />
            <br />
            <input type="email" className="form-control " value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email" required />
            <br />
            <input type="password" className="form-control " value={password} onChange={(e)=>setpass(e.target.value)} placeholder="Enter Password" required />
            <br />
            <input type="password" className="form-control " value={reenterpassword} onChange={(e)=>setreenterpassword(e.target.value)} placeholder="Re-enter Password" required  />
            <br />
            <button className="btn btn-success" type='submit'>Register</button>
            <br />
            <br />
     
        </form>
    </section>
     
    <Login  password = {password} />

    </div>
          
    </>
  )
}

export default Register