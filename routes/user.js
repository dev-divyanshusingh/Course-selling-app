const{ Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const {  JWT_USER_PASSWORD } = require("../config.js");


   //rather than now exporting a function now we will export express router
userRouter.get("/signup", async function (req, res){
   const { email, password, firstName, lastName } = req.body;   
   //we could have done something like this too: const email = req.body.email and same for eveery other element
   //Have to add zod validation and hash the password so plaintext password not stored in DB
   //Put inside the try-catch block
   try{
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
   } catch(e){
    message:"Your signup has failed"
   }
    res.json({
        message:"signup Succeded"
    })
    });

userRouter.post("/signin",async  function (req, res){
    const { email, password } = req.body;
    //aync and await because the user.Model return a promise and it should be promise beacuse the database is far in us and it takes time to fetch data;
   //Ideally password should to be hashed, and hence you cannot compare the user provided password and database password
    const user = await userModel.findOne({ //either the user, or undefined
        email: email,
        password: password
    });  // if use userModel.find will return an array [] if find any entry will return entry within the array [{}];

    if(user) {
        const token = jwt.sign({
           id: user._id
        }, JWT_USER_PASSWORD);
        //You do cookie/session based logic here 
        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
    });

userRouter.get("/purchases", function (req, res){
    res.json({
        message:"{}"
    })
    });

module.exports = {
     userRouter: userRouter
}