const express = require('express');
const router = express.Router();
const controller = require('./payment.controller');
const reqMiddleware = require('@middleware/request');
const passport = require('passport');

router.use(passport.authenticate('jwt', { session: false }));
router.post('/', controller.create);
router.patch('/:id', reqMiddleware.hasId, controller.edit);
router.delete('/:id', controller.delete);
router.get('/months/:date', controller.read);

module.exports = router;
