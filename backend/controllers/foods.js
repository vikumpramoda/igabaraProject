const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


router.route('/add').post(upload.single('photo'),(req,res)=>{
    const foodname=req.body.foodname;
    const fooddescription = req.body.fooddescription;
    const foodprice=Number(req.body.foodprice);
    const photo =req.file.originalname;
    


    const newFood=new Food({
        foodname,
        fooddescription,
        foodprice,
        photo
        
    });

    newFood.save()
    .then(()=>res.json('food added!'))
    .catch(err=>res.status(400).json('Error:'+err));
});


    router.route('/:id').get((req,res)=>{
        Food.findById(req.params.id)
        .then(()=>res.json(Food))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/:id').delete((req,res)=>{
        Food.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Food deleted'))
        .catch(err=>res.status(400).json('Error: '+err));
    });

    router.route('/update/:id').post((req,res)=>{
        Food.findById(req.params.id)
        .then(food=>{
            food.foodname=req.body.foodname;
            food.fooddescription=req.body.fooddescription;
            food.foodprice=Number(req.body.foodprice);
            

            food.save()
            .then(()=>res.json('food list updated!!!!'))
            .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error:'+err));
    });

    router.route('/').get((req,res)=>{
        Food.find()
        .then(food=> res.json(food))
        .catch(err=>res.status(400).json('Error:'+err));
    
    });

module.exports = router;
