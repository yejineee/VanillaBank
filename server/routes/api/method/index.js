const express = require('express');
const router = express.Router();
const controller = require('./method.controller');
const passport = require('passport');

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', controller.read);
router.post('/', controller.create);
router.delete('/:id', controller.delete);

module.exports = router;
