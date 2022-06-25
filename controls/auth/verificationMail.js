const { User } = require('../../models');
const { NotFound } = require('http-errors');

const verificationMail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = User.findOne({ verificationToken });
  if (!user) {
    throw new NotFound();
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.json({
    message: 'Verification successful',
  });
};

module.exports = verificationMail;
