import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: String,
    unique: true
  },
  password:{
    type:String,
    required:true
  },
  gender: {
    type:String,
    enum:["MALE","FEMALE","OTHER"],
    default:"MALE"
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
