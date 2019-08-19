const mongoose = require('mongoose');

mongoose.connect('mongodb://+window.location.hostname', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./product.model');