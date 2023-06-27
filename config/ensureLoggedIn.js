// this middleware prevents anyone from doing any crud operations without a valid token!
// prevents anonymous users from doing anything suspect without having to make an account

module.exports = function (req, res, next) {
  // Status code of 401 --> 'Unauthorized'
  if (!req.user) return res.status(401).json('Unauthorized')
  // Okay!
  next()
}