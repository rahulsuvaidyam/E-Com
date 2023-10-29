import express from 'express';
const ProductRouter = express.Router();

import Product from '../Controller/Product';

ProductRouter.post('/Product',Product.createProduct);
ProductRouter.get('/Product',Product.getProducts);
export default ProductRouter;