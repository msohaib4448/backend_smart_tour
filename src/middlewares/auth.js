function auth(req, res, next) {
  console.log(" Routing through Auth middleware... ");
  next();
}
module.exports = { auth };