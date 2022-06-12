const { Contact } = require('../../models');

const getAll = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner: _id }, '', {
    favorite,
    skip,
    limit: +limit,
  }).populate('owner', '_id email');
  if (favorite) {
    const favoriteContacts = contacts.filter((contact) => contact.favorite);
    return res.json({
      status: 'success',
      code: 200,
      data: { result: favoriteContacts },
    });
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result: contacts },
  });
};
module.exports = getAll;
