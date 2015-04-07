/**
 * Keymetrics
 *
 * LICENSE:    MIT
 *
 * @project    node-red-contrib-keymetrics
 * @package    Keymetrics
 * @author     André Lademann <vergissberlin@googlemail.com>
 * @copyright  Copyright (c) 2015 andrelademann.de
 * @license    http://opensource.org/licenses/MIT
 */

module.exports = function (RED) {
	'use strict';

	var pmx = require('pmx');
	var probe = pmx.probe();

	var util = require('util');
	var events = require('events');
	var debuglength = RED.settings.debugMaxLength || 1000;


	function KeymetricsNode(config) {
		RED.nodes.createNode(this, config);
		this.name = config.name;
		/*
		this.complete = (n.complete || 'payload').toString();

		if (this.complete === 'false') {
			this.complete = 'payload';
		}

		this.console = n.console;
		this.active = (n.active === null || typeof n.active === 'undefined') || n.active;

		*/
		var node = this;

		this.on('input', function (msg) {
/*

			if (this.complete === 'true') {
				// debug complete msg object




				if (this.console === 'metric') {
					// @todo HERE !
					var my_variable = Math.random() * 10;
					var metric = probe.metric({
						name: 'Random',
						value: function () {
							return my_variable;
						}
					});
				}

				if (this.console === 'event') {
					// @todo HERE !
					pmx.emit(msg.topic || 'msg', msg);
				}





				if (this.active) {
					sendDebug({id: this.id, name: this.name, topic: msg.topic, msg: msg, _path: msg._path});
				}
			} else {
				// debug user defined msg property
				var property = 'payload';
				var output = msg[property];
				if (this.complete !== 'false' && typeof this.complete !== 'undefined') {
					property = this.complete;
					var propertyParts = property.split('.');
					try {
						output = propertyParts.reduce(function (obj, i) {
							return obj[i];
						}, msg);
					} catch (err) {
						output = undefined;
					}
				}

				if (this.active) {
					sendDebug({
						id: this.id,
						name: this.name,
						topic: msg.topic,
						property: property,
						msg: output,
						_path: msg._path
					});
				}
			}
*/
			pmx.emit('user:register', {
				user: 'Alex registered',
				email: 'thorustor@gmail.com'
			});

			var err = new Error('Something wrong');
			pmx.notify(err);
		});
	}

	RED.nodes.registerType('keymetrics', KeymetricsNode);

	RED.httpAdmin.post('/keymetrics/:id/:state', RED.auth.needsPermission('keymetrics.write'), function(req,res) {
		var node = RED.nodes.getNode(req.params.id);
		var state = req.params.state;

		if (node !== null && typeof node !== 'undefined' ) {
			if (state === 'enable') {
				node.active = true;
				res.send(200);
			} else if (state === 'disable') {
				node.active = false;
				res.send(201);
			} else {
				res.send(404);
			}
		} else {
			res.send(404);
		}
	});
};

/*
function sendDebug(msg) {
	if (msg.msg instanceof Error) {
		msg.format = 'error';
		msg.msg = msg.msg.toString();
 var err = new Error('Something wrong');

 pmx.notify(err);
	} else if (msg.msg instanceof Buffer) {
		msg.format = 'buffer';
		msg.msg = msg.msg.toString('hex');
	} else if (typeof msg.msg === 'object') {
		var seen = [];
		msg.format = 'object';
		if (util.isArray(msg.msg)) {
			msg.format = 'array';
		}
		msg.msg = JSON.stringify(msg.msg, function (key, value) {
			if (typeof value === 'object' && value !== null) {
				if (seen.indexOf(value) !== -1) {
					return '[circular]';
				}
				seen.push(value);
			}
			return value;
		}, ' ');
		seen = null;
	} else if (typeof msg.msg === 'boolean') {
		msg.format = 'boolean';
		msg.msg = msg.msg.toString();
	} else if (typeof msg.msg === 'number') {
		msg.format = 'number';
		msg.msg = msg.msg.toString();
	} else if (msg.msg === 0) {
		msg.format = 'number';
		msg.msg = '0';
	} else if (msg.msg === null || typeof msg.msg === 'undefined') {
		msg.format = (msg.msg === null) ? 'null' : 'undefined';
		msg.msg = '(undefined)';
	} else {
		msg.format = 'string';
		msg.msg = msg.msg;
	}

	if (msg.msg.length > debuglength) {
		msg.msg = msg.msg.substr(0, debuglength) + ' ....';
	}

	RED.comms.publish('debug', msg);
}
*/