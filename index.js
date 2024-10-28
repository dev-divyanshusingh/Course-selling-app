require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const jsonwebtoken = require("jsonwebtoken");
const{ userRouter } = require("./routes/user")
const{ courseRouter  } = require("./routes/course");
const{ adminRouter } = require( "./routes/admin" ); 
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);


async function main(){
    //enoviornment file
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("Listening on port 3000")
}

main();





