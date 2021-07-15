const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    guest:{type:String, require:true},
    igabara:{type:String, require:true},
    packagename:{type:String, require:true},
    packagerate:{type:String, require:true},
    bfood:{type:String, require:true},
    brate:{type:String, require:true},
    dfood:{type:String, require:true},
    drate:{type:String, require:true},
    lfood:{type:String, require:true},
    lrate:{type:String, require:true},
    message:{type:String, require:true},
    
},

{
    timestamps:true,
});

const Feedback = mongoose.model('Feedback',feedbackSchema);

module.exports=Feedback;