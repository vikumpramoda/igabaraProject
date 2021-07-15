"use strict";
const express = require("express");
const dinnerRoutes = express.Router();
let Dinner = require('../models/dinner')

const cloudinary = require("cloudinary").v2


//image hosting server configuration details

cloudinary.config({
    cloud_name :"vikum",
    api_key : "684345139831131",
    api_secret : "sLQayiybwzCaJyAo0M7W4bBt5ts"
  });

  dinnerRoutes.route('/').get((req,res)=>{
    Dinner.find()
    .then(dinners=> res.json(dinners))
    .catch(err=>res.status(400).json('Error:'+err));

}); 

dinnerRoutes.route('/add').post(async(req,res)=>{
    const foodname=req.body.foodname;
    const fooddescription = req.body.fooddescription;
    const foodprice=req.body.foodprice;
    const image =req.body.image;
    


    const newFood=new Dinner({
        foodname,
        fooddescription,
        foodprice,
        image
        
    });

    newFood.save()
    .then(()=>res.json('food added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    dinnerRoutes.route('/:id').get((req,res)=>{
      Dinner.findById(req.params.id)
        .then(()=>res.json(Food))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    dinnerRoutes.route('/:id').delete((req,res)=>{
      Dinner.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Food deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    dinnerRoutes.route('/update/:id').post((req,res)=>{
      Dinner.findById(req.params.id)
        .then(dinners=>{
            dinners.foodname=req.body.foodname;
            dinners.fooddescription=req.body.fooddescription;
            dinners.foodprice=Number(req.body.foodprice);
            

            dinners.save()
            .then(()=>res.json('food list updated!!!!'))
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+err));
    });

    

// upload file to cloudinary

dinnerRoutes.post('/upload',(req,res) =>{

    let imageUrl="";
    if(req.files===null){
      return res.status(200).json({msg :"No file is Selected to upload. Please select a file first!"})
    }
    const file = req.files.photo;
    console.log("uplod file is:" , file);
    
  
    cloudinary.uploader.upload(file.tempFilePath, function(err, result){
      
      if(err){
  
        console.log("Error is :" , err);
        
        return res.status(400).json({msg :"Server Error not Uploaded"})
  
      }else{
      console.log("Result is :" , res);
      
  
     
  
     console.log("response URL: " , result.url);
     res.status(200).json({URL :result.url})
  
    }
     
  
  });
  
  
  
  })








module.exports = dinnerRoutes;
