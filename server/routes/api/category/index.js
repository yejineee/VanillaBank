const express = require('express');
const router = express.Router();
const controller = require('./category.controller');
const passport = require('passport');

router.use(passport.authenticate('jwt', { session: false }));

router.get('/', controller.read);

module.exports = router;
