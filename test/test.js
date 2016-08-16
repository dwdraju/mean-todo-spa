process.env.NODE_ENV = 'test';

var mongoose = require('mongoose'),
chai = require('chai'),
chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
chai.config.includeStack = true;

var should = chai.should(),
assert = chai.assert,
expect = chai.expect;

var server = require('../app'),
Model = require('../models/model');

describe('ToDo', function(){
	Model.collection.drop();
	beforeEach(function(done){
		var newData = new Model({
			text: 'Drink Tea',
			});
		newData.save(function(err) {
			done();
		});
	});
	afterEach(function(done){
		Model.collection.drop();
		done();
	});
	it('should return status 200 on homepage / GET', function(done){
		chai.request(server)
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			done();
		});
	});
	it('should return json on /api GET', function(done) {
		chai.request(server)
		.get('/api/todos')
		.end(function(err, res){
			res.should.have.status(200);
			res.should.be.json;
			res.body[0].should.have.property('_id');
			res.body[0].should.have.property('text');
			expect(res.body[0].text).to.be.a('string');
			res.body[0].text.should.equal('Drink Tea');
			done();
		});
	});
	it('should delete todo on /api/todo/<id> DELETE', function(done) {
		chai.request(server)
		.get('/api/todos')
		.end(function(err, res){
			chai.request(server)
			.delete('/api/todos/'+res.body[0]._id)
			.end(function(error, response){
				should.not.exist(error);
				response.should.have.status(200);
				response.should.be.json;
				done();
			});
		});
	});	
});