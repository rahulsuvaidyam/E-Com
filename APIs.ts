import express from 'express';
const Api = express();
import { verifyToken } from "./JWT";
import AuthRouter from './Router/AuthRouter';
import ProfileRouter from './Router/ProfileRouter';
import CategoryRouter from './Router/CategoryRouter';
import MediaRouter from './Router/mediaRouter';
import ProductRouter from './Router/ProductRouter';

Api.use('/auth',AuthRouter);
Api.use(verifyToken)
Api.use('/',ProfileRouter)
Api.use('/',CategoryRouter)
Api.use('/',MediaRouter)
Api.use('/',ProductRouter)


export default Api;