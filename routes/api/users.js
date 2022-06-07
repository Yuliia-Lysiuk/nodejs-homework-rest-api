const express = require('express');

const router = express.Router();

const { auth } = require('../../controls');

const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

const { addValidation, ctrlWrapper } = require('../../middlewares/index');

router.post(
  '/register',
  addValidation(joiRegisterSchema),
  ctrlWrapper(auth.register)
);

router.post('/login', addValidation(joiLoginSchema), ctrlWrapper(auth.login));

module.exports = router;
