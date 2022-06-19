const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const updateAvatarUrl = require('./updateAvatarUrl');

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatarUrl,
};
