var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var galleryItemSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

var GalleryItem = module.statics = module.exports = mongoose.model('GalleryItem', galleryItemSchema);

