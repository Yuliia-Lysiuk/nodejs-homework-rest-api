const express = require('express');

const router = express.Router();

const { auth } = require('../../controls');

const { joiRegisterSchema } = require('../../models/user');

const { addValidation, ctrlWrapper } = require('../../middlewares/index');

router.post(
  '/register',
  addValidation(joiRegisterSchema),
  ctrlWrapper(auth.register)
);

module.exports = router;
