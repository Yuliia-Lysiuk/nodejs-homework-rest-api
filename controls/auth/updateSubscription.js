const { User } = require('../../models');

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const user = await User.findByIdAndUpdate(
    _id,
    { subscription },
    {
      new: true,
    }
  );
  res.json({
    status: 'success',
    code: 200,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};
module.exports = updateSubscription;
