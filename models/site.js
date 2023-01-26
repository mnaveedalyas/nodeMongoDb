var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let siteSchema = new Schema({ 
    customerId: { type: Schema.Types.ObjectId, ref: 'customers' },
    name: { type: String , required: true },
    billingSite:{ type: Schema.Types.ObjectId, ref: 'sites' }, 
    // if billingSite is empty or "self", then bill itself
    phone: { type: String },
    email: { type: String },
    website: { type: String },
    Address: {
        street: { type: String },
        suburb: { type: String },
        city: { type: String },
        region: { type: String },
        postcode: { type: String },
        country: { type: String }
    },
    contacts: [{ type: Schema.Types.ObjectId, ref: 'contacts' }],
    isArchived: { type: Boolean, default: false },
    createdAt: { type: Date , default: Date.now, required: true },
    updatedAt: { type: Date , dfault: Date.now, required: true }  
});

module.exports = mongoose.model('site', siteSchema);