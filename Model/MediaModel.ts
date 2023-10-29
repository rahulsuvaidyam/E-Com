import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    url: { type: String, require: true },
    mimetype: { type: String, require: true },
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

const Media = mongoose.model('Media', schema);
export default Media;