var nodemailer = require('nodemailer');
var keys = require('./keys');



module.exports.sendInquiry = function (mailOptions, transporter) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
