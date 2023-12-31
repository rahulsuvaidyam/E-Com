import mongoose from 'mongoose';

// Define the User schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media',
    require: true
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  modified_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
