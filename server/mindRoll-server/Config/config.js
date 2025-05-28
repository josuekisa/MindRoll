module.exports = {
  port: process.env.PORT || 5001,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret'
};