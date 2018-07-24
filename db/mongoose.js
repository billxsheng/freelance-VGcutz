const mongoose = require('mongoose');

console.log('db');
mongoose.connect(/* process.env.MONGODB_URI ||  */'mongodb://localhost:27017/vcutz');


module.exports = {
    mongoose
}