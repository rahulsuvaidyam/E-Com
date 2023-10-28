import mongoose from 'mongoose';

// Define the User schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
},{
    timestamps: true
});

// Create the User model based on the schema
const User = mongoose.model('Category', categorySchema);

export default User;
