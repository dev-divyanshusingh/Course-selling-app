const express = require("express");
const mongoose = require("mongoose");

const app = express();
const jsonwebtoken = require("jsonwebtoken");
const{ userRouter } = require("./routes/user")
const{ courseRouter  } = require("./routes/course");
const{ adminRouter } = require( "./routes/admin" ); 
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

app.use(express.json());

async function main(){
    //enoviornment file
    await mongoose.connect("mongodb+srv://divyanshusingh1101:9zyXydblfyIjvez8@cluster0.brmkv.mongodb.net/course-selling-app");
    app.listen(3000);
    console.log("Listening on port 3000")
}

main();





