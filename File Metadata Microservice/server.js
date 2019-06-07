'use strict';

var express = require('express');
var cors = require('cors');
let bodyParser = require('body-parser')
// require and use "multer"...

var app = express();
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })
let fs = require('fs')
app.use(cors())
let upload = multer()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit: '50mb'}))



app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });


app.post('/upload', upload.single('filetoupload'), (req,res)=>{
  return (!req.file) ? res.end(JSON.stringify({name:null,size:null})) : res.end(JSON.stringify({name:req.file.originalname,size:req.file.size}))
if(!req.file){
  res.status(400).json({"name":null,"size":null})
}
  else{
  res.status(200).json({"name":req.file.originalname,"size":req.file.size})
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
