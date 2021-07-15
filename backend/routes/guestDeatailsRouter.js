const router = require('express').Router();
let Exercise = require('../models/guestDeatails.models')

router.route('/').get((req,res)=>{
    Exercise.find()
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
 
   

    const newExercise=new Exercise({
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
        addresses
        

    });

    newExercise.save()
    .then(()=>res.json('Exercises added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    router.route('/:id').get((req,res)=>{
        Exercise.findById(req.params.id)
        .then(()=>res.json(Exercise))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/:id').delete((req,res)=>{
        Exercise.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Exercise deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/update/:id').post((req,res)=>{
        Exercise.findById(req.params.id)
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

module.exports = router;
