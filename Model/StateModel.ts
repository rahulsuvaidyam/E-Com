import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
    name: { type: String, require: true },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
      },
      modified_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    status: {
        "type": "string",
        "enum": ["active", "inactive", "deleted"],
        default: 'active'
    }
},{
    timestamps: true
});

const State = mongoose.model('State',stateSchema);
export default State;