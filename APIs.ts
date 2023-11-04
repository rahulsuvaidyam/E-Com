import express from 'express';
const Api = express();
import { verifyToken } from "./JWT";
import AuthRouter from './Router/AuthRouter';
import ProfileRouter from './Router/ProfileRouter';
import CategoryRouter from './Router/CategoryRouter';
import MediaRouter from './Router/mediaRouter';
import ProductRouter from './Router/ProductRouter';
import RateRouter from './Router/RateRouter';
import Router from './Router/Router';
import EventRouter from './Router/EventRouter';

Api.use('/auth',AuthRouter);
Api.use('/uploads', express.static('uploads'));
Api.use('/',Router)
Api.use(verifyToken)
Api.use('/',MediaRouter)
Api.use('/',CategoryRouter)
Api.use('/',ProfileRouter)
Api.use('/',ProductRouter)
Api.use('/',RateRouter)
Api.use('/',EventRouter)


export default Api;
