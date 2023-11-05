import express from 'express';
const CartRouter = express.Router();

import Cart from '../Controller/Cart';

CartRouter.get('/cart',Cart.GetCart);
CartRouter.post('/cart',Cart.PostCart);
CartRouter.put('/cart',Cart.PutCart);
CartRouter.delete('/cart',Cart.DelteCart);
CartRouter.get('/cartcount',Cart.GetCartCount);
export default CartRouter;