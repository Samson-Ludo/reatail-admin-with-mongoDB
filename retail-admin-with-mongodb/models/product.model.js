const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    productID: {
        type: String
    },
    price: {
        type: String
    },
    currentStock: {
        type: String
    }
});


mongoose.model('Product', productSchema);
