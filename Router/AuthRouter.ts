import express from 'express';
const authRouter = express.Router();

import Auth from '../Controller/Auth';

authRouter.post('/register',Auth.Register);
authRouter.post('/login',Auth.Login);


export default authRouter;