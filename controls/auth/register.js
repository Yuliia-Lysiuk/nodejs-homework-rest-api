const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(hashPassword);
  await User.create({ email, password: hashPassword, subscription });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = register;
