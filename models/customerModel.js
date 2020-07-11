let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/new', { useNewUrlParser: true, useUnifiedTopology: true } );

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model('customer', customerSchema);

