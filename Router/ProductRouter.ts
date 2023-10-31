import express from 'express';
const ProductRouter = express.Router();

import Product from '../Controller/Product';

ProductRouter.post('/product',Product.createProduct);
ProductRouter.get('/product',Product.getProducts);
export default ProductRouter;