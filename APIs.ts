import express from 'express';
const Api = express();
import { verifyToken } from "./JWT";
import AuthRouter from './Router/AuthRouter';
import ProfileRouter from './Router/ProfileRouter';
import CategoryRouter from './Router/CategoryRouter';

Api.use('/auth',AuthRouter);
Api.use(verifyToken)
Api.use('/',ProfileRouter)
Api.use('/',CategoryRouter)


export default Api;