const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lunchSchema = new Schema({
    foodname:{type:String, require:true},
    fooddescription:{type:String, require:true},
    foodprice:{type : Number, require:true},
    image: {
        type: String
    },
    
},

{
    timestamps:true,
    collection: "lunchs",
});

const Lunch = mongoose.model('Lunchfoods',lunchSchema);

module.exports=Lunch;