const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PolicySchema = new Schema({
    clientId: { type: String, required: true },
    amountInsured: { type: Number, required: true },
    id: { type: String, required: true },
    installmentPayment: { type: Boolean },
    email: {type: String, required: true},
    inceptionDate: { type: Date }
}, { collection: 'policies' });


// Export the model
module.exports = mongoose.model('Policy', PolicySchema);