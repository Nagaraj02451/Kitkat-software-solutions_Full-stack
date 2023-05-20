import React, { useRef, useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import "./Career.css"

function Contact() {

  const url = "http://localhost:4000/api/Career"

  const[name , setName] = useState("")
  const[email , setEmail] = useState("")
  const[subject , setSubject] = useState("")
  const[message , setMessage] = useState("")

  //multer

  const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [resultText, setResultText] = useState("");

    const fileInput = useRef();

    const saveFile = ()=>{
      setFile(fileInput.current.files[0]);
      setFileName(fileInput.current.files[0].name)
  }

  
  const uploadFile = async ()=>{
    const formData = new FormData();
    formData.append('file',file );
    formData.append('fileName',fileName );

    try{
       const res =  await axios.post('http://localhost:4000/upload',
            formData
        )
        setResultText(res.data.message)
        fileInput.current.value = "";
        setTimeout(()=>{
            setResultText("");
        },5000)
    }catch(ex){
        if(ex.response !== undefined){
            setResultText(ex.response.data.message)
        }else{
            setResultText("Server Error!")
        }
        setTimeout(()=>{
            setResultText("");
        },5000)
    }
}

const submit =(e)=>{
  e.preventDefault();
    axios.post(url , {
      name : name,
      email : email,
      subject : subject,
      message :message
     
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch(()=>{
     console.log("Invalied");
    })
    alert("Applied successfully")
}


  return (
    <>
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Career</h2>
          <h4>Currently Hiring For :
              Freshers & 1+ Years Experience</h4>
              <h4>Coimbatore_location</h4>
        </div>

        <div className="row">

          <div className="col-lg-3 d-flex" data-aos="fade-up">
            <div className="info-box">
             <Link to="/jobdetails"> <h3>Java developer</h3></Link>
              <p>1 - year Experience</p>
            </div>
          </div>

          <div className="col-lg-3 d-flex" data-aos="fade-up">
            <div className="info-box">
            <Link to="/jobdetails"><h3>Node_js</h3></Link>
              <p>Fresher & 1 - year experience</p>
            </div>
          </div>

          <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="info-box">
            <Link to="/jobdetails"><h3>Angular JS</h3></Link>
              <p>Fresher</p>
            </div>
          </div>

          <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box ">
            <Link to="/jobdetails"><h3>PHP - Developer</h3></Link>
              <p>1 - year Experience & Fresher</p>
            </div>
          </div>

          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
               
            <form onSubmit={(e)=>submit(e)} className="php-email-form" method='POST'>
            <h3 className='d-flex justifyContentCenter'>OPEN POSITION</h3>
            <br />
              <div className="row">
                <div className="col-lg-6 form-group">
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)} name="subject" id="subject" placeholder="Programming Skills" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" value={message} onChange={(e)=>setMessage(e.target.value)} name="message" rows="5" placeholder="Message" required />
              </div>
              <h3 className='text-success'>Resume</h3>
              <div className="form-group d-flex row">
                <div className='col-lg-6 '>
                <input type="file" className="form-control " ref={fileInput}  onChange={saveFile} name="Upload resume" id="Upload resume" />
                </div>
              </div>
              <div className="text-center "><button type="submit" onClick={uploadFile} >Upload</button></div>
              {resultText?(<p>{resultText}</p>):null}

            </form>

          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Contact