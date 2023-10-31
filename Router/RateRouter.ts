import express from 'express';
const RateRouter = express.Router();

import Rate from '../Controller/RateController';

RateRouter.post('/rate',Rate.rate);

export default RateRouter;