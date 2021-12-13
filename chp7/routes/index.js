var express = require('express');
const { route } = require('./pages');
var router = express.Router();
const pageRoute = require('./pages')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use(pageRoute)

module.exports = router;
