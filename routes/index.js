var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});

router.get('/api/todos', controller.sendall);
router.post('/api/todos', controller.add);

module.exports = router;
