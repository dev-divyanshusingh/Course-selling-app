const { Router } = require("express");
const adminRouter = Router();
const{ adminModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
//bcrypt for password hashing, zod for verifying user input , jsonwebtokens for tokenising  

adminRouter.post("/signup", async  function (req, res){
        const { email, password, firstName, lastName } = req.body;   
        //we could have done something like this too: const email = req.body.email and same for eveery other element
        //Have to add zod validation and hash the password so plaintext password not stored in DB
        //Put inside the try-catch block
        try{
             await adminModel.create({
                 email: email,
                 password: password,
                 firstName: firstName,
                 lastName: lastName
             })
        } catch(e){
         message:"Your admin signup has failed"
        }
         res.json({
             message:"signup Succeded as admin"
         })
         });
     
adminRouter.post("/signin", async function (req, res){
    const { email, password } = req.body;
    //aync and await because the user.Model return a promise and it should be promise beacuse the database is far in us and it takes time to fetch data;
   //Ideally password should to be hashed, and hence you cannot compare the user provided password and database password
    const admin = await adminModel.findOne({ //either the user, or undefined
        email: email,
        password: password
    });  // if use userModel.find will return an array [] if find any entry will return entry within the array [{}];

    if(admin) {
        const token = jwt.sign({
           id: admin._id
        }, JWT_ADMIN_PASSWORD);
        //You do cookie/session based logic here 
        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect Credentials, Sorry you are not logged as admin"
        })
    }
    });
  //endpoint: /api/v1/course/
adminRouter.post("/course", adminMiddleware, async function (req, res){
    const adminId = req.userId;
    
    const { title, description, imageUrl, price } = req.body;
    //Creating a web3 saas in 6hrs
    const course= await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price, 
        creatorId : adminId,
    });
    
    res.json({
            message:"message  course created",
            courseId: course._id
    })
    });

adminRouter.put("/course", function (req, res){
        res.json({
            message:"admin to put course endpoints"
    })
    });

adminRouter.get("/course/bulk", function (req, res){
        res.json({
            message:"admin course bulk endpoints"
    })
    }); 

module.exports = {
    adminRouter: adminRouter
};