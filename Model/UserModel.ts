import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  password:{
    type:String,
    required:true
  },
  age: {
    type: Number
  },
  role:{
    type:String,
    enum:["ADMIN","SELLER","BUYER"],
    default:"BUYER"
  },
},{
    timestamps: true
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
