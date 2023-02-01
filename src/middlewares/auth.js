function auth(req, res, next) {
    console.log(" Routing through Auth middleware... ");
    console.log(" Routing through Auth middleware 2... ");
    console.log('Tea is good for health')

    next();
  }
  module.exports = { auth };