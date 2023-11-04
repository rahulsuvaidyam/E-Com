import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: { type: String, require: true },
    category: {type: mongoose.Schema.Types.ObjectId,ref: 'Category',require: true},
    event: {type: mongoose.Schema.Types.ObjectId,ref: 'Event',require: true},
    images:[{type: mongoose.Schema.Types.ObjectId,ref: 'Media',require: false}],
    description:{type: String, require: true},
    price:{type: Number, require: true},
    discounts:{type: Number, default:0},
    key_features:[{ type: String, require: true }],
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

const Product = mongoose.model('Product', schema);
export default Product;