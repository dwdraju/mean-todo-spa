var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');

/* GET home page. */
router.get('*', function(req, res){
	res.sendfile('./public/index.html');
})
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/api/todos', controller.sendall);
router.post('/api/todos', controller.add);
router.delete('/api/todos/:id', controller.delete);

module.exports = router;
