const addValidation = require('./validationMiddleware');
const ctrlWrapper = require('./ctrlWrapper');
const authSetup = require('./authSetup');
const upload = require('./upload');
module.exports = { addValidation, ctrlWrapper, authSetup, upload };
