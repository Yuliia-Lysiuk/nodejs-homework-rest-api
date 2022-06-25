const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const updateAvatarUrl = require('./updateAvatarUrl');
const verificationMail = require('./verificationMail');

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatarUrl,
  verificationMail,
};
