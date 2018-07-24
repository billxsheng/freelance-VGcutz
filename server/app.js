const express = require('express');
const bodyParser = require("body-parser");
const db = require('../db/mongoose');
const GalleryItem = require('../db/models/gallery-item');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.post('/booking/submit', (req, res) => {
    const form = req.body;
    console.log(form);
    res.status(201).json({
        message: 'Form successfully submitted'
    })
});

app.get('/gallery', (req, res) => {
  const galleryItems = [];
  GalleryItem.find({}, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      console.log(item, 'hello');
    }
  });
  // const galleryItems = [
  //   {
  //     name: 'Low Top Fade',
  //     description:'Low top, short sides',
  //     imagePath:"http://localhost:3000/frontend/assets/photos/gallery/monkey.jpg"
  //   },
  //   {
  //     name: 'High Top Fade',
  //     description:'High top, short sides',
  //     imagePath:"http://localhost:3000/frontend/assets/photos/gallery/monkey.jpg"
  //   },
  //   {
  //     name: 'Combover',
  //     description:'To the side',
  //     imagePath:"http://localhost:3000/frontend/assets/photos/gallery/monkey.jpg"
  //   },
  //   {
  //     name: 'Buzzcut',
  //     description:'All gone',
  //     imagePath:"http://localhost:3000/frontend/assets/photos/gallery/monkey.jpg"
  //   }
  // ]

  // res.status(201).json({
  //   galleryItems: galleryItems
  // })
})



module.exports = app;

