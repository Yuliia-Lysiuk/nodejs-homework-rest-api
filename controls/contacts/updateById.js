// const { updateContact } = require('../../models/contacts');
const { Contact } = require('../../models');

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const newContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!newContact) {
    const error = new Error(`Contact with id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result: newContact },
  });
};
module.exports = updateById;
