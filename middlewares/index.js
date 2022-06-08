const addValidation = require('./validationMiddleware');
const ctrlWrapper = require('./ctrlWrapper');
const authSetup = require('./authSetup');
module.exports = { addValidation, ctrlWrapper, authSetup };
