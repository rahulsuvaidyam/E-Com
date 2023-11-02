import express from 'express';
const Router = express.Router();

import Product from '../Controller/Product';
import Category from '../Controller/Category';

Router.get('/categoryshow',Category.GetShow);
// Router.get('/categoryfordd',Category.GetDropDown);
Router.get('/productshow',Product.GetShow);
Router.get('/categorybyproduct',Product.GetShowfindById);
Router.get('/productdetails',Product.GetShowDetails);
export default Router;