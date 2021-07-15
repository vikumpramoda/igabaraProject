const router = require('express').Router();
let Package = require('../models/packageAdd.model');


// Defined get data(index or listing) route
router.get('/getall', (req, res) => {
    Package.find({ is_active: 1 }, function (err, packages) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(packages);
      }
    })
  });



router.route('/').get((req,res)=>{
    Package.find()
    .then(packages=> res.json(packages))
    .catch(err=>res.status(400).json('Error:'+err));

});

router.route('/add').post((req,res)=>{
    const packageno=req.body.packageno;
    const packagename=req.body.packagename;
    const description = req.body.description;
    const packageprice=req.body.packageprice;
    const packagerate=req.body.packagerate;
    


    const newPackage=new Package({
        packageno,
        packagename,
        description,
        packageprice,
        packagerate,
    });

    newPackage.save()
    .then(()=>res.json('Package added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    router.route('/:id').get((req,res)=>{
        Package.findById(req.params.id)
        .then(Package=>res.json(Package))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/:id').delete((req,res)=>{
        Package.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Package deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/update/:id').post((req,res)=>{
        Package.findById(req.params.id)
        .then(packages=>{
            packages.packageno=req.body.packageno;
            packages.packagename=req.body.packagename;
            packages.description=req.body.description;
            packages.packageprice=req.body.packageprice;
            packages.packagerate=req.body.packagerate;
            

            packages.save()
            .then(()=>res.json('Exercise updated!!!!'))
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+err));
    });

module.exports = router;
