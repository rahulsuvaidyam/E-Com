import mongoose from 'mongoose';

const districtSchema = new mongoose.Schema({
    name: { type: String, require: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
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

const District = mongoose.model('District',districtSchema);
export default District;