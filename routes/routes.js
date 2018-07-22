var express = require('express');
var router = express();


router.get('/', (req, res) => {
    console.log(1);
    res.render('index', {title: 'hello'});
});

router.post('/booking/submit')

module.exports = router;
