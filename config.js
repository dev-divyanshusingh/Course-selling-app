//Always avoid circular dependency , here to avoid circular dependencies we have made a seperate
//config file and we will export all needed things from here and will import in
//needed file

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD =  process.env.JWT_ADMIN_PASSWORD;


module.exports = {
    JWT_USER_PASSWORD : JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD: JWT_ADMIN_PASSWORD
}