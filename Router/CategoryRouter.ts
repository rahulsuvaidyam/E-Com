import express from 'express';
const categoryRouter = express.Router();

import Category from '../Controller/Category';

categoryRouter.post('/category',Category.Post);
categoryRouter.get('/categoryfordd',Category.GetDropDown);
// categoryRouter.get('/category',Category.Get);
// categoryRouter.get('/category',Category.Get);


export default categoryRouter;