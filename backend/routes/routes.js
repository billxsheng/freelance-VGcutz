var express = require('express');
var router = express();


router.get('/', (req, res) => {
    res.render('index', {title: 'hello'});
});

module.exports = router;
