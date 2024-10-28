const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function (req, res){
    //In real world you would expect user to pay money 
    res.json({
        message:"{}"
    })
});

courseRouter.get("/preview", function (req, res){

});

module.exports = {
    courseRouter: courseRouter 
};