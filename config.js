//Always avoid circular dependency , here to avoid circular dependencies we have made a seperate
//config file and we will export all needed things from here and will import in
//needed file

const JWT_USER_PASSWORD = "dkjihaiuser123";
const JWT_ADMIN_PASSWORD =  "adminwlasecrethai";


module.exports = {
    JWT_USER_PASSWORD : JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD: JWT_ADMIN_PASSWORD
}