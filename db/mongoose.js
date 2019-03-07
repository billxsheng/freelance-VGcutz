const mongoose = require('mongoose');
const {keys} = require('../server/keys');

mongoose.connect(keys.mongo.URI, { useNewUrlParser: true });


module.exports = {
    mongoose
}