import express from 'express';
const Router = express.Router();

import Product from '../Controller/Product';
import Category from '../Controller/Category';
import Event from '../Controller/Event';

Router.get('/categoryshow',Category.GetShow);
Router.get('/eventoccasion',Event.GetOccasion);
Router.get('/GetShowGrop',Product.GetShowGrop);
// Router.get('/categoryfordd',Category.GetDropDown);
Router.get('/productshow',Product.GetShow);
Router.get('/categorybyproduct',Product.GetShowfindById);
Router.get('/productdetails',Product.GetShowDetails);
export default Router;