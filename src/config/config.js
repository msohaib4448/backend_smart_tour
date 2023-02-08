require('dotenv').config();
const config = {
    env: process.env.APP_ENV,
    port: process.env.PORT || 5000,
   
};

module.exports = config;
