import express from 'express';
const authRouter = express.Router();

import Auth from '../Controller/Auth';

authRouter.post('/register',Auth.Register);


export default authRouter;