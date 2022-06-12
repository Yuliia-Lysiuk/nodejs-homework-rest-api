const express = require('express');

const router = express.Router();

const { auth } = require('../../controls');

const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

const {
  addValidation,
  ctrlWrapper,
  authSetup,
} = require('../../middlewares/index');

router.get('/current', authSetup, ctrlWrapper(auth.getCurrent));

router.post(
  '/register',
  addValidation(joiRegisterSchema),
  ctrlWrapper(auth.register)
);

router.post('/login', addValidation(joiLoginSchema), ctrlWrapper(auth.login));
router.get('/logout', authSetup, ctrlWrapper(auth.logout));
router.patch('/', authSetup, ctrlWrapper(auth.updateSubscription));
module.exports = router;
