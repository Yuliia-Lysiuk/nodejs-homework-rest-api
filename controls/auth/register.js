const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email, {}, true);
  console.log(avatarURL);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });

  return res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email: result.email,
        subscription: result.subscription,
        avatarUrl: result.avatarURL,
      },
    },
  });
};

module.exports = register;
