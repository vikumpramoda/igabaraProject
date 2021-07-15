const router = require('express').Router();
const Package = require('../models/packageNo.models');


router.route('/').get((req,res)=>{
    Package.find()
    .then(packages=> res.json(packages))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.route('/add').post((req,res)=>{
    const packageno=req.body.packageno;
    const newPackage=new Package({packageno});

    newPackage.save()
    .then(()=>res.json('User added'))
    .catch(err=>res.status(400).json('Error:'+err));
});

module.exports=router;
