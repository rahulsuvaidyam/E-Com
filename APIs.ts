import express from 'express';
const Api = express();

import AuthRouter from './Router/AuthRouter';

Api.use('/auth',AuthRouter);


export default Api;