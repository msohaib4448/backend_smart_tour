function auth(req, res, next) {
    console.log(" Routing through Auth middleware... ");
    console.log(" Routing through Auth middleware 2... ");

    next();
  }
  module.exports = { auth };