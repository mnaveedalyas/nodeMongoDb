var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let contactSchema = new Schema({
    customerId: { type: Schema.Types.ObjectId, ref: 'customers' },
    firstName: { type: String },
    lastName: { type: String },
    isDefault: { type: Boolean },
    contactTypes: [],
    phone: { type: String },
    email: { type: String },
    title: { type: String },
    sites: [{ type: Schema.Types.ObjectId, ref: 'sites' }],
    isArchived: { type: Boolean, default: false },
    createdAt: { type: Date , default: Date.now, required: true },
    updatedAt: { type: Date , dfault: Date.now, required: true }      
});

module.exports = mongoose.model('contact', contactSchema);

