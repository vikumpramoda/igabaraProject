const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateSchema = new Schema({
    

    checkinD:{
        type:Date,
        require:true
    },

    checkoutD:{
        type:Date,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },

   
},

{
    timestamps:true,
});

const RDate = mongoose.model('DayTable',dateSchema);

module.exports=RDate;