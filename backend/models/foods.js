const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodname:{type:String, require:true},
    fooddescription:{type:String, require:true},
    foodprice:{type : Number, require:true},
    image: {
        type: String
    },
    
},

{
    timestamps:true,
    collection: "foods",
});

const Food = mongoose.model('foods',foodSchema);

module.exports=Food;