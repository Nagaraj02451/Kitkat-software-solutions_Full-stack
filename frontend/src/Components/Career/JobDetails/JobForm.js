import React, { useRef, useState } from 'react'
import axios from 'axios'

function JobForm() {
    const url = "http://localhost:4000/api/Career"

    const[name , setName] = useState("")
    const[email , setEmail] = useState("")
    const[subject , setSubject] = useState("")
    const[message , setMessage] = useState("")


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

        <div className="row">

          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
               
            <form onSubmit={(e)=>submit(e)} className="php-email-form">
            <h3 className='d-flex justifyContentCenter'>Application_Form</h3>
            <br />
              <div className="row">
                <div className="col-lg-6 form-group">
                Name <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                Email <input type="email" className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
              Year of Experience  <input type="text" className="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)} name="subject" id="subject" placeholder="Year of Experience" required />
              </div>
              <div className="form-group">
              Tell us more about yourself  <textarea className="form-control" value={message} onChange={(e)=>setMessage(e.target.value)} name="message" rows="5" placeholder="Tell us more about yourself" required />
              </div>
              <div className="form-group">
               Resume <input type="file" ref={fileInput} onChange={saveFile} className="form-control" name="Upload resume" id="Upload resume" placeholder="Upload resume" />
              </div>
              <div className="text-center"><button type="submit" onClick={uploadFile} >Upload</button></div>
              {resultText?(<p>{resultText}</p>):null}
            </form>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default JobForm