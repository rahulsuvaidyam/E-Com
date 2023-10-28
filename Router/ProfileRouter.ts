import express from 'express';
const profileRouter = express.Router();

import Profile from '../Controller/Profile';

profileRouter.put('/profile',Profile.ProfilePut);
// profileRouter.post('/login',Auth.Login);


export default profileRouter;