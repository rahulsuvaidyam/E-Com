import express from 'express';
const Router = express.Router();

import Product from '../Controller/Product';
import Category from '../Controller/Category';
import Event from '../Controller/Event';
import Carousel from '../Controller/Carousel';

Router.get('/categoryshow',Category.GetShow);
Router.get('/eventoccasion',Event.GetOccasion);
Router.get('/carouselshow',Carousel.GetShowCarousel);
// Router.get('/categoryfordd',Category.GetDropDown);
// product
Router.get('/search',Product.GetSearch);
Router.get('/productshow',Product.GetShow);
Router.get('/categorybyproduct',Product.GetShowfindById);
Router.get('/productdetails',Product.GetShowDetails);
Router.get('/GetShowGrop',Product.GetShowGrop);
export default Router;