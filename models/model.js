var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var TodoSchema = new Schema({
text: {type: String}
});

module.exports = mongoose.model('Todo', TodoSchema);
