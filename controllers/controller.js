var TodoModel = require('../models/model');
function getTodos(res) {
    TodoModel.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos
    });
}

module.exports = {
		sendall: function(req, res, next){
			TodoModel.find(function(err, data){
				if(err){
					res.send(err);
				}else{
					res.json(data);
				}
			})
		},
		add: function(req, res, next){
			var newData = new TodoModel({
				text : req.body.text,
				done: false
			});

			newData.save(function(err, data){
				if(err){
					res.send(err)
				}else{
					getTodos(res)
				}
			});
		},
		delete: function(req, res, next){
			var id = req.params.id;
			TodoModel.findOne(({_id:id}, function(err, data){
				if(err){
					res.send(err);
				}
			}));
			TodoModel.remove({_id: id}, function(err, result){
				if(err){
					res.send(err);
				}else{
					getTodos(res)
				}
			});
		},

	}