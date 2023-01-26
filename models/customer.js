var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let customerSchema = new Schema({
    name: { type: String , required: true },
    tradingname: { type: String },
    defaultSite: { type: Schema.Types.ObjectId , ref: 'Sites' },
    // sites: [{ type: schema.ObjectId, ref: sites }],
    // contacts: [{ type: schema.ObjectId, ref: contacts }],
    isArchived: { type: Boolean, default: false },
    createdAt: { type: Date , default: Date.now, required: true },
    updatedAt: { type: Date , dfault: Date.now, required: true }
});

module.exports = mongoose.model("customer", customerSchema)