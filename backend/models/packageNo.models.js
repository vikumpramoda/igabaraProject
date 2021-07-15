const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    packageno:{
        type:String,
        required:true,
        unique:true,
        trim:true
    
    },
},
{
    timestamps:true,
});

const Package = mongoose.model('PackageNo',packageSchema);

module.exports=Package;