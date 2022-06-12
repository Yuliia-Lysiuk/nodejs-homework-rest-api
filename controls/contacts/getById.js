const { Contact } = require('../../models');

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findById({ _id: contactId });
  if (!contact) {
    const error = new Error(`Contact with id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result: contact },
  });
};

module.exports = getById;
