var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TodoSchema = new Schema({
	text: {type: String, default: ''}
});

module.exports = mongoose.model('Todo', TodoSchema);
