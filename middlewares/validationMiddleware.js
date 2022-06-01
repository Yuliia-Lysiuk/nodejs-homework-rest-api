const { joiSchema } = require('../models');

const addValidation = async (req, res, next) => {
  const { error } = joiSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = addValidation;
