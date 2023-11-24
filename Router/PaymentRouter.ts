import express from 'express';
const PaymentRouter = express.Router();

import Payment from '../Controller/Payment';

// PaymentRouter.delete('/media',Media.deleteMediaPermanent);
PaymentRouter.post('/payment',Payment.PostPayment);
export default PaymentRouter;