var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');

router.get('/api/todos', controller.sendall);
router.post('/api/todos', controller.add);
router.delete('/api/todos/:id', controller.delete);
router.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
module.exports = router;
