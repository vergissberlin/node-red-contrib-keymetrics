/**
 * Keymetrics Node
 *
 * LICENSE:    MIT
 *
 * @project    node-red-contrib-keymetrics
 * @package    Keymetrics
 * @author     André Lademann <vergissberlin@googlemail.com>
 * @copyright  Copyright (c) 2015 andrelademann.de
 * @license    http://opensource.org/licenses/MIT
 */

var path = require('path');

process.env.NODE_RED_HOME = process.env.NODE_RED_HOME || path.resolve(__dirname+"/../../node-red");
var helper = require(path.join(process.env.NODE_RED_HOME,
	'test', 'nodes', 'helper.js'));

try {
	helper.nock = helper.nock || require('nock');
} catch(er) {
	helper.nock = null;
}
module.exports = helper;