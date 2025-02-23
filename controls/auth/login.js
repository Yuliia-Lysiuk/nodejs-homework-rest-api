const { User } = require('../../models');
const { Unauthorized } = require('http-errors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.verify) {
    throw new Unauthorized('Email or password is wrong');
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized('Email or password is wrong');
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  const result = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  );
  return res.status(200).json({
    status: 'success',
    code: 200,
    token,
    data: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};
module.exports = login;
