const express = require('express');

const { joiSchema } = require('../../models/contact');

const { contacts } = require('../../controls');

const { addValidation, ctrlWrapper, authSetup } = require('../../middlewares');

const router = express.Router();

router.get('/', authSetup, ctrlWrapper(contacts.getAll));

router.get('/:contactId', ctrlWrapper(contacts.getById));

router.post(
  '/',
  authSetup,
  addValidation(joiSchema),
  ctrlWrapper(contacts.add)
);

router.delete('/:contactId', ctrlWrapper(contacts.deleteById));

router.put(
  '/:contactId',
  addValidation(joiSchema),
  ctrlWrapper(contacts.updateById)
);

router.patch('/:contactId/favorite', ctrlWrapper(contacts.updateStatusContact));

module.exports = router;
