const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { v4 } = require('uuid');
const sendEmail = require('../../helpers/sendEmail');

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }
  const verificationToken = v4();
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email, {}, true);

  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: 'Registration verification',
    html: `<a target='_blank' href="http://localhost:3000/api/users/verify/${verificationToken}">Verify</a>`,
  };
  await sendEmail(mail);
  return res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email: result.email,
        subscription: result.subscription,
        avatarUrl: result.avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = register;
