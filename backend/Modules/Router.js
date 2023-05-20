const express = require("express")
const datas = require("./Collection")
const RouterOne = express.Router()

RouterOne.post("/Create" , datas.POST_dat )
RouterOne.post("/View" , datas.View_dat )
RouterOne.post("/Contact" , datas.POST_Con )
RouterOne.get("/Collect" , datas.Viewda )
RouterOne.get("/viewcontact" , datas.Viewcontactlist )
RouterOne.post("/Career" , datas.POST_Careerlist )
RouterOne.get("/ViewCareer" , datas.Viewcareerlist)
RouterOne.post("/Viewsubscriber" , datas.POST_SubscribeUser)

module.exports = RouterOne