const router = require('express').Router();
let RDate = require('../models/dates')
router.route('/').get((req,res)=>{
    RDate.find()
    .then(rdate=> res.json(rdate))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.route('/add').post((req,res)=>{
    
    const checkinD=Date.parse(req.body.checkinD);
    const checkoutD=Date.parse(req.body.checkoutD);
  

    const newExercise=new RDate({
        checkinD,
        checkoutD

    });

    newExercise.save()
    .then(()=>res.json('rdate added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    router.route('/:id').get((req,res)=>{
        RDate.findById(req.params.id)
        .then(()=>res.json(RDate))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/:id').delete((req,res)=>{
        RDate.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Exercise deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/update/:id').post((req,res)=>{
        RDate.findById(req.params.id)
        .then(rdate=>{
            
            rdate.checkindD=Date.parse(req.body.checkinD);
            rdate.checkoutD=Date.parse(req.body.checkoutD);
            

            rdate.save()
            .then(()=>res.json('Exercise updated!!!!'))
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+err));
    });

module.exports = router;
