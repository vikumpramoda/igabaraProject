"use strict";
const express = require("express");
const foodRoutes = express.Router();
let Food = require('../models/foods')

const cloudinary = require("cloudinary").v2;


//image hosting server configuration details

cloudinary.config({
    cloud_name :"vikum",
    api_key : "684345139831131",
    api_secret : "sLQayiybwzCaJyAo0M7W4bBt5ts"
  });

  foodRoutes.route('/').get((req,res)=>{
    Food.find()
    .then(foods=> res.json(foods))
    .catch(err=>res.status(400).json('Error:'+err));

}); 

foodRoutes.route('/add').post(async(req,res)=>{
    const foodname=req.body.foodname;
    const fooddescription = req.body.fooddescription;
    const foodprice=req.body.foodprice;
    const image =req.body.image;
    


    const newFood=new Food({
        foodname,
        fooddescription,
        foodprice,
        image
        
    });

    newFood.save()
    .then(()=>res.json('food added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    foodRoutes.route('/:id').get((req,res)=>{
        Food.findById(req.params.id)
        .then(()=>res.json(Food))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    foodRoutes.route('/:id').delete((req,res)=>{
        Food.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Food deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    foodRoutes.route('/update/:id').post((req,res)=>{
        Food.findById(req.params.id)
        .then(foods=>{
            foods.foodname=req.body.foodname;
            foods.fooddescription=req.body.fooddescription;
            foods.foodprice=Number(req.body.foodprice);
            

            foods.save()
            .then(()=>res.json('food list updated!!!!'))
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+err));
    });

    

// upload file to cloudinary

foodRoutes.post('/upload',(req,res) =>{

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








module.exports = foodRoutes;
