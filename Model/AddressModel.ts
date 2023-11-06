import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    name: { type: String, require: true },
    phone: { type: Number, require: true },
    pin_code:{type: Number, require: true},
    state:{type: mongoose.Schema.Types.ObjectId,ref: 'State'},
    district:{type: mongoose.Schema.Types.ObjectId,ref: 'District'},
    house_name:{type: String, require: true},
    road_name:{type: String, require: true},
    land_mark:{type: String, require: false},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: {
        "type": "string",
        "enum": ["active", "inactive", "deleted"],
        default: 'inactive'
    }
},{
    timestamps: true
});

const Address = mongoose.model('Address',addressSchema);
export default Address;