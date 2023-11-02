import express from 'express';
const ProductRouter = express.Router();

import Product from '../Controller/Product';

ProductRouter.get('/product',Product.GetProduct);
ProductRouter.post('/product',Product.PostProduct);
ProductRouter.put('/product',Product.PutProduct);
ProductRouter.delete('/product',Product.DelteProduct);
export default ProductRouter;