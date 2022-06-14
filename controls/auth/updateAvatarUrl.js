const { User } = require('../../models');
const Jimp = require('jimp');
const path = require('path');
const fs = require('fs').promises;
const publicDir = path.join(__dirname, '../../public/avatars');

const updateAvatarUrl = async (req, res, next) => {
  const { _id } = req.user;
  const file = req.file;
  const avatarURL = `${publicDir}/${_id}${path.extname(file.originalname)}`;
  try {
    (await Jimp.read(file.path)).resize(250, 250).write(file.path);

    await fs.rename(file.path, avatarURL);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.status(200).json({ status: 'success', code: 200, avatarURL });
  } catch (error) {
    fs.unlink(file.path);
    console.log(error);
    throw error;
  }
};
module.exports = updateAvatarUrl;
