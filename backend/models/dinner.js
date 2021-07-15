const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dinnerSchema = new Schema({
    foodname:{type:String, require:true},
    fooddescription:{type:String, require:true},
    foodprice:{type : Number, require:true},
    image: {
        type: String
    },
    
},

{
    timestamps:true,
    collection: "dinners",
});

const Dinner = mongoose.model('dinnerfoods',dinnerSchema);

module.exports=Dinner;