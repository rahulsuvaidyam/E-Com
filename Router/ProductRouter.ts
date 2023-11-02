import express from 'express';
const ProductRouter = express.Router();

import Product from '../Controller/Product';

ProductRouter.put('/product',Product.PutProduct);
ProductRouter.post('/product',Product.createProduct);
ProductRouter.delete('/product',Product.DelteProduct);
export default ProductRouter;