const Schheamlist = require("./Schema")
const ScheeemaContact = require("./Contectscheema")
const ScheemaCareer = require("./ScheemaCareer")
const Scheemasub =  require("./Subscribe")
const bcrypt = require("bcrypt")

 
const POST_data = async(req , res)=>{
 
    const passwordBcrypt = await bcrypt.hash(req.body.password , 7)

    const data = new Schheamlist({
        ...req.body,
        password : passwordBcrypt
    })
    const EmailList = await Schheamlist.findOne({email : req.body.email})
     if(EmailList) return res.json("Email is already 'Exit'")
     const datas =  await data.save()
      res.json(datas) 
}
const POST_Contact = async(req , res)=>{

    const Contact = new ScheeemaContact({
        ...req.body
    })
     const datas =  await Contact.save()
 
      res.json(datas)
   
}

const POST_Subscribe = async(req , res)=>{

    const Contact = new Scheemasub({
        ...req.body
    })
     const datas =  await Contact.save()
 
      res.json(datas)
   
}

const POST_Career = async(req , res)=>{

    const Contact = new ScheemaCareer({
        ...req.body
    })
     const datas =  await Contact.save()
 
      res.json(datas)
   
}

const View_data = async(req , res)=>{
    try {
        const check = await Schheamlist.findOne({ email: req.body.email })
        if (check.password === req.body.password) {
            res.status(201).send("Welcome to Kitkat software solution") 
        }
        else {
            res.send("incorrect password")
        }
        
    }  
    catch (e) {
        res.send("wrong details")
    }
}

const View = async (req , res)=>{
     const ViewData = await Schheamlist.find()
     res.json(ViewData)
}
const Viewcontact = async (req , res)=>{
    const ViewDatas = await ScheeemaContact.find()
    res.json(ViewDatas)
}
const Viewcareer = async (req , res)=>{
    const ViewDatas = await ScheemaCareer.find()
    res.json(ViewDatas)
}

const datas = {
    POST_dat : POST_data,
    View_dat : View_data,
    Viewda : View,
    POST_Con : POST_Contact,
    Viewcontactlist : Viewcontact,
    POST_Careerlist : POST_Career,
    Viewcareerlist : Viewcareer,
    POST_SubscribeUser : POST_Subscribe
}

module.exports = datas