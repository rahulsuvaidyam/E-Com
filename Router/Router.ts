import express from 'express';
const Router = express.Router();

import Product from '../Controller/Product';
import Category from '../Controller/Category';

Router.get('/category',Category.Get);
// Router.get('/categoryfordd',Category.GetDropDown);
Router.get('/product',Product.getProducts);
Router.get('/productid',Product.findByIdProducts);
export default Router;