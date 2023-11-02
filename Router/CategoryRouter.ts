import express from 'express';
const categoryRouter = express.Router();

import Category from '../Controller/Category';

categoryRouter.get('/category',Category.GetCategory);
categoryRouter.post('/category',Category.PostCategory);
categoryRouter.put('/category',Category.PutCategory);
categoryRouter.delete('/category',Category.DelteCategory);
categoryRouter.get('/categorydropdown',Category.GetDropDown);


export default categoryRouter;