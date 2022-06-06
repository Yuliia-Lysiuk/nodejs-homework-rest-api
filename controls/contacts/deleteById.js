const { Contact } = require('../../models');

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const deleteContact = await Contact.findByIdAndDelete(contactId);
  if (!deleteContact) {
    const error = new Error(`Contact with id=${contactId} not found`);
    error.status = 404;
    throw error;
  }
  res.status(200).json({
    status: 'success',
    code: 204,
    message: 'contact deleted',
    data: { result: deleteContact },
  });
};
module.exports = deleteById;
