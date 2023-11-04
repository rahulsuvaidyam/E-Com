import mongoose from 'mongoose';

// Define the User schema
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media',
    require: false
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

// Create the User model based on the schema
const User = mongoose.model('Event', eventSchema);

export default User;
