import mongoose from 'mongoose';

const carouselSchema = new mongoose.Schema({
    name: { type: String, require: true },
    // event: {type: mongoose.Schema.Types.ObjectId,ref: 'Event',require: true},
    description:{type: String, require: true},
    images:[{type: mongoose.Schema.Types.ObjectId,ref: 'Media',require: false}],
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
        default: 'inactive'
    }
},{
    timestamps: true
});

const Carousel = mongoose.model('Carousel',carouselSchema);
export default Carousel;