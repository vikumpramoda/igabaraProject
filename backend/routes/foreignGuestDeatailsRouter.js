const router = require('express').Router();
let Foreign = require('../models/foreginGuestDeatails.models')

const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name :"vikum",
    api_key : "684345139831131",
    api_secret : "sLQayiybwzCaJyAo0M7W4bBt5ts"
  });

router.route('/').get((req,res)=>{
    Foreign.find()
    .then(exercises=> res.json(exercises))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.route('/add').post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName = req.body.lastName;
    const idNumber=Number(req.body.idNumber);
    const dob=Date.parse(req.body.dob);
    const gender=req.body.gender;
    const firstName2=req.body.firstName2;
    const lastName2 = req.body.lastName2;
    const idNumber2=Number(req.body.idNumber2);
    const dob2=Date.parse(req.body.dob2);
    const gender2=req.body.gender2;
    const adults=req.body.adults;
    const children = req.body.children;
    const email=req.body.email;
    const mobileNumber = req.body.mobileNumber;
    const addresses =req.body.addresses;
    const image =req.body.image;
    const image2 =req.body.image2;
   

    const newForeign=new Foreign({
        firstName,
        lastName,
        idNumber,
        dob,
        gender,
        firstName2,
        lastName2,
        idNumber2,
        dob2,
        gender2,
        adults,
        children,
        email,
        mobileNumber,
        addresses,
        image,
        image2,

    });

    newForeign.save()
    .then(()=>res.json('Exercises added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    router.route('/:id').get((req,res)=>{
        Foreign.findById(req.params.id)
        .then(()=>res.json(Exercise))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/:id').delete((req,res)=>{
        Foreign.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Exercise deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/update/:id').post((req,res)=>{
        Foreign.findById(req.params.id)
        .then(exercises=>{
            exercises.firstName=req.body.firstName;
            exercises.lastName=req.body.lastName;
            exercises.idNumber=Number(req.body.idNumber);
            exercises.dob=Date.parse(req.body.dob);
            exercises.gender=req.body.gender;
            exercises.firstName2=req.body.firstName2;
            exercises.lastName2=req.body.lastName2;
            exercises.idNumber2=Number(req.body.idNumber2);
            exercises.dob2=Date.parse(req.body.dob2);
            exercises.gender2=req.body.gender2;
            exercises.adults=req.body.adults;
            exercises.children=req.body.children;
            exercises.email=req.body.email;
            exercises.mobileNumber=req.body.mobileNumber;
            
         
            

            exercises.save()
            .then(()=>res.json('Exercise updated!!!!'))
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+err));
    });


    // upload file to cloudinary

    router.post('/upload',(req,res) =>{

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

     // upload file to cloudinary   2

     router.post('/upload2',(req,res) =>{

      let imageUrl="";
      if(req.files===null){
        return res.status(200).json({msg :"No file is Selected to upload. Please select a file first!"})
      }
      const file = req.files.photo2;
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

module.exports = router;
