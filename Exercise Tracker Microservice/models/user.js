const mongoose = require('mongoose')
mongoose.connect(process.env.MLAB_URI,{ useNewUrlParser: true } )
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  exercises:[{
    type:Schema.Types.ObjectId,
    ref:'Exercise'
  }]
});

const User = mongoose.model("User",userSchema)
module.exports = User