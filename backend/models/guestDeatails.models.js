const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    idNumber:{
        type:String,
        require:true
    },
    dob:{
        type:Date,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    firstName2:{
        type:String,
        require:true
    },
    lastName2:{
        type:String,
        require:true
    },
    idNumber2:{
        type:String,
        require:true
    },
    dob2:{
        type:Date,
        require:true
    },
    gender2:{
        type:String,
        require:true
    },
    adults:{
        type:Number,
        require:true
    },

    children:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },

    mobileNumber:{
        type:String,
        require:true
    },

    date:{
        type:Date,
        default:Date.now
    },

    address:{
        type:String,
        require:true
    },

    addresses: [{
        addressLine1: { type: String },
        addressLine2: { type: String},
        city: { type: String},
        country: { type: String },
        region: { type: String},
        zip: { type: String},

    }]
       
    
},

{
    timestamps:true,
});

const Exercise = mongoose.model('GuestForm',exerciseSchema);

module.exports=Exercise;