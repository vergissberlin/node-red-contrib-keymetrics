/**
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
var should = require('should');
var keymetricsNode = require('../../src/keymetrics.js');
var helper = require('../helper.js');
var nock = helper.nock;

describe('keymetrics node', function () {

	before(function (done) {
		helper.startServer(done);
	});

	afterEach(function () {
		helper.unload();
		if(nock) {
			nock.cleanAll();
		}
	});

	it('should be loaded', function(done) {
		var flow = [{id:'n1', type:'keymetrics', name: 'Keymetrics', complete:'false' }];
		helper.load(keymetricsNode, flow, function() {
			var n1 = helper.getNode('n1');
			n1.should.have.property('name', 'Keymetrics');
			n1.should.have.property('complete', 'payload');
			n1.should.have.property('active', true);
			(typeof n1.console).should.be.equal('undefined');
			done();
		});
	});

	it('should be loaded with parameter', function(done) {
		var flow = [{
			id:'n1',
			type:'keymetrics',
			name: 'Keymetrics',
			complete:'false',
			console: 'metric'
		}];
		helper.load(keymetricsNode, flow, function() {
			var n1 = helper.getNode('n1');
			n1.should.have.property('name', 'Keymetrics');
			n1.should.have.property('type', 'keymetrics');
			n1.should.have.property('complete', 'payload');
			n1.should.have.property('active', true);
			n1.should.have.property('console', 'metric');
			done();
		});
	});

	it('should be loaded with msg', function(done) {
		var flow = [{
			id:'n1',
			type:'keymetrics',
			name: 'Keymetrics',
			complete:'false',
			console: 'metric',
			msg: {
				topic: 'test topic',
				payload: 'test payload'
			}
		}];
		helper.load(keymetricsNode, flow, function() {
			var n1 = helper.getNode('n1');
			//console.log(n1);
			n1.should.have.property('name', 'Keymetrics');
			n1.should.have.property('complete', 'payload');
			n1.should.have.property('active', true);
			n1.should.have.property('console', 'metric');
			done();
		});
	});


});
