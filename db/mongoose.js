const mongoose = require('mongoose');
const {keys} = require('../server/keys');

console.log('db');
mongoose.connect( keys.mongo.URI);


module.exports = {
    mongoose
}