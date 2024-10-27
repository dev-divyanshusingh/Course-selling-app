//Defining Schema in MongoDb using mongoose library
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;
const userSchema = new Schema({
    email: {type:String, unique: true},
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    email: {type:String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: String,
    imageUrl: String,
    creatorId: objectId    
});

const purchaseSchema = new Schema({
    courseId: objectId,
    userId: objectId
});


//Defining Models
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

//Exporting the modules
module.exports =  {
  userModel,
  adminModel,
  courseModel,
  purchaseModel
};