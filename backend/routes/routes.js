var express = require('express');
var router = express();


router.get('/', (req, res) => {
    console.log('test')
    res.render('index');
});

module.exports = {
    router
}