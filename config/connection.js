const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contraSearch', {useNewUrlParser: true, useUnifiedTopology: true},
(error) => {
    if(!error) {
        console.log('Successful connection with MongoDB Server');
    } else {
        console.log("Error with MongoDB's connectivity");
    }
});