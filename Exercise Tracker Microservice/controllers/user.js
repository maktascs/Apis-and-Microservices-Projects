let UserModel = require('../models/user');
let ExerciseModel = require('../models/exercise')
module.exports = {
  newUser: async (req,res,next) => {
    const u = await UserModel.findOne({"username":req.body.username});
    if(u !== null){
      res.status(500).json({"error":"User is already in the system"});
    }
    else{
    
    const user = new UserModel(req.body);
    const uNew = await user.save();
    res.status(201).json(uNew);
    }
  }
}