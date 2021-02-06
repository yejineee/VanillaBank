const express = require('express');
const router = express.Router();

const userRouter = require('./api/user');
const paymentRouter = require('./api/payment');
const methodRouter = require('./api/method');
const categoryRouter = require('./api/category');
const reqMiddleware = require('@middleware/request');

router.use(reqMiddleware.allInFields);

router.use('/users', userRouter);
router.use('/payments', paymentRouter);
router.use('/methods', methodRouter);
router.use('/categories', categoryRouter);

module.exports = router;
