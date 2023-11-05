import mongoose from 'mongoose';

// Define the User schema
const cartSchema = new mongoose.Schema({
  count: {
    type: Number,
    default:1
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    require: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
}, {
  timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
