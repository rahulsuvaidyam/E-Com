import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    rate:{
        type: Number,
        "enum": [1,2,3,4,5],
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require: true
    },
    rated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
},{
    timestamps: true
});

const Rate = mongoose.model('Rate', schema);
export default Rate;