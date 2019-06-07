var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true})
let Schema = mongoose.Schema;

let URLSchema = new Schema({
  url: {
    type:String,
    required:true,
    unique:true
},
  shortURL:{
    type:String,
    required:true,
    unique:true
  }
})
const URL = mongoose.model("URL", URLSchema)
module.exports = URL