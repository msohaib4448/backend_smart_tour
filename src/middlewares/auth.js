function auth(req, res, next) {
    console.log(" Routing through Auth middleware... ");
    console.log(" Routing through Auth middleware 2... ");
    console.log('ssssssssssssssssssssssss')

    next();
  }
  module.exports = { auth };