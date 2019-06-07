const urlmodel = require('../models/url.model')
const shortId = require('shortid')
const validUrl = require('valid-url')
module.exports = { 
  
  postUrl: async (req,res,next) =>{
    let {original_url} = req.body;
    const checkurl = await urlmodel.findOne({"url":req.body.original_url});
    if(!validUrl.isUri(original_url)){
      return res.status(500).json({"error":"invalid URL"})
    }
    else{
      if(checkurl !== null){
      res.status(404).json({"error":"URL is already in the database"});
    }
    
    else {
      let shorturl = await shortId.generate()
      let urlNew = new urlmodel({"url":original_url,"shortURL":shorturl});
      await urlNew.save();
      res.status(201).json(urlNew);
    }
    }
 
  },
  
  convertUrl:async(req,res,next) =>{
    let url = req.params.url;
    const findURL = await urlmodel.findOne({"shortURL":url});
    if(findURL){
      res.redirect(findURL.url)
    }
    else{
       return res.status(500).json({"error":"invalid URL"})
    }
  }
  
}