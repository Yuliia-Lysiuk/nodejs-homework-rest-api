const express = require('express');

const router = express.Router();

const { auth } = require('../../controls');

const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

const {
  addValidation,
  ctrlWrapper,
  authSetup,
  upload,
} = require('../../middlewares');

router.get('/current', authSetup, ctrlWrapper(auth.getCurrent));

router.post(
  '/register',
  addValidation(joiRegisterSchema),
  ctrlWrapper(auth.register)
);

router.post('/login', addValidation(joiLoginSchema), ctrlWrapper(auth.login));

router.get('/logout', authSetup, ctrlWrapper(auth.logout));

router.patch('/', authSetup, ctrlWrapper(auth.updateSubscription));

router.patch(
  '/avatars',
  authSetup,
  upload.single('avatar'),
  ctrlWrapper(auth.updateAvatarUrl)
);
module.exports = router;
