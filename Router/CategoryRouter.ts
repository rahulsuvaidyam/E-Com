import express from 'express';
const categoryRouter = express.Router();

import Category from '../Controller/Category';

categoryRouter.get('/categoryfordd',Category.GetDropDown);
categoryRouter.post('/category',Category.Post);
categoryRouter.put('/category',Category.PutCategory);
categoryRouter.delete('/category',Category.DelteCategory);
// categoryRouter.get('/category',Category.Get);
// categoryRouter.get('/category',Category.Get);


export default categoryRouter;