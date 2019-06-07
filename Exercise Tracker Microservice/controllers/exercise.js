let ExerciseModel = require('../models/exercise')
let UserModel = require('../models/user');
module.exports = {
  addExercise: async (req,res,next) => {
    let userId = req.body.userId;
    const u = await UserModel.findOne({"username":userId});
    if(u === null){
     return  res.status(404).json({"error":"userId is not found in the database"});
    }
    else{
      const e = new ExerciseModel({
                                    "description":req.body.description,
                                    "duration":req.body.duration,
                                    "from":req.body.from,
                                    "userId":u});
      const eNew = await e.save();
      u.exercises.push(eNew._id);
      await u.save();
      res.status(201).json(eNew);
      
    }
  },
  
  getExercises: async (req,res,next) => {
    let user = req.query.userId;
    let from = req.query.from  ? new Date(req.query.from):new Date('1961-01-01');
    let to = req.query.to  ? new Date(req.query.to):new Date();
    let limit = Number(req.query.limit);
    console.log(user)
    let userId = await UserModel.findOne({"username":user});
    let e = await ExerciseModel.find({
                                      "userId":userId._id,
                                      "from":{
                                        $gt:from,
                                        $lt:to
                                      }
    
                                      })
                                      .limit(limit);
    res.status(200).json({e,"from":from,"to":to,"limit":limit});
  }
}