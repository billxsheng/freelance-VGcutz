const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');
const send = require('./send');
var app = express();
var keys = require('./keys');
var nodemailer = require('nodemailer');
var db = require('../db/mongoose');
var GalleryItem = require('../db/models/gallery-item');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpeg'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "server/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


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

app.post('/booking/submit',multer({storage: storage}).single('image'), (req, res) => {
  const form = req.body;
  console.log(form);
  res.status(201).json({
    message: 'Form successfully submitted'
  })
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: keys.keys.emailInfo.username,
      pass: keys.keys.emailInfo.password,
    }
  });
  var mailOptions = {
    attachments: [
      {
        filename: req.file.filename,
        path: __dirname + '/images/' + req.file.filename,
    }
    ],
    from: keys.keys.emailInfo.username,
    to: keys.keys.personalEmail.address,
    subject: `Customer inquiry from ${req.body.firstName} ${req.body.lastName}.`,
    text: `
    Client Name: ${req.body.firstName} ${req.body.lastName}
    Client Email: ${req.body.email}
    Client Mobile: ${req.body.mobile}

    ${req.body.message}
    `
  };

  send.sendInquiry(mailOptions, transporter);

});

app.get('/gallery', (req, res) => {
  // console.log('yeet');
  // GalleryItem.find({}, (err, items) => {
  //   console.log('starts');
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.status(201).json({
  //       galleryItems: items
  //     })
  //   }
  // });
  const galleryItems = [{
      name: 'Low Top Fade',
      description: 'Low top, short sides',
      imagePath: "../../../assets/resources/julio.jpg"
    },
    {
      name: 'High Top Fade',
      description: 'High top, short sides',
      imagePath: "../../../assets/resources/julio.jpg"
    },
    {
      name: 'Combover',
      description: 'To the side',
      imagePath: "../../../assets/resources/julio.jpg"
    },
    {
      name: 'Buzzcut',
      description: 'All gone',
      imagePath: "../../../assets/resources/julio.jpg"
    }
  ]
  res.status(201).json({
    galleryItems: galleryItems
  })
})

app.get('/gallery/:id', (req, res) => {
  // GalleryItem.find({}, (err, items) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(items[req.params.id]);
  //     res.status(201).json({
  //       galleryItems: items[req.params.id]
  //     })
  //   }
  // });

  const galleryItems = [{
      name: 'Low Top Fade',
      description: 'Low top, short sides',
      imagePath: "../../../assets/resources/julio.jpg"
    },
    {
      name: 'High Top Fade',
      description: 'High top, short sides',
      imagePath: "../../../assets/resources/julio.jpg"
    },
    {
      name: 'Combover',
      description: 'To the side',
      imagePath: "../../../assets/resources/julio.jpg"
    },
    {
      name: 'Buzzcut',
      description: 'All gone',
      imagePath: "../../../assets/resources/julio.jpg"
    }
  ]

  res.status(201).json({
    galleryItems: galleryItems[req.params.id]
  })
 })



module.exports = app;
