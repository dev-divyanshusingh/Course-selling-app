const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");


/*function middleware(password){
    return function(req, res, next){
        const token = req.headers.token;
    const decoded = jwt.verify(token, password);

    if(decoded) {
        req.userId = decoded.id;
        next();
    } else{
        res.status(403).json({
            message: "You are not signed in as admin or user , TRY AGAIN "
        });
    }
} */ // To merhe the both middleware
function adminMiddleware(req, res, next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD );

    if(decoded) {
        req.userId = decoded.id;
        next();
    } else{
        res.status(403).json({
            message: "You are not signed in as admin or user , TRY AGAIN "
        });
    }
};

module.exports = {
    adminMiddleware: adminMiddleware
}