
let mongoose = require('mongoose');

const uri = 'mongodb+srv://boss:peter1994@cluster0.ypnku.mongodb.net/new?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } );

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

