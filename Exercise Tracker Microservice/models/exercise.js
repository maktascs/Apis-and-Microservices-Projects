const mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URI,{ useNewUrlParser: true })
const Schema = mongoose.Schema;

let exerciseSchema = new Schema({
  description:{
    type:String,
    required:true
  },
  duration:{
    type:Number,
    required:true
  },
  from:{
    type:Date,
    required:false
  },
  userId:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
});

const Exercise = mongoose.model("Exercise",exerciseSchema)
module.exports = Exercise