const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slotSchema = new Schema({
  slotGuest: { 
    type: String, 
    require: true 
  },
  slotDate: {
    type: String, 
    require: true 
  }, 

 
}, 
{ versionKey: false, 
  
})

const pinkslotModel = mongoose.model('pinkcalanderTable', slotSchema);

module.exports = pinkslotModel;