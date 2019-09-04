var express = require('express');
var Gun     = require('gun');
require('gun/axe');

var app = express();
app.use(Gun.serve);
app.use(express.static('../../storage/downloads/server/www'));

var server = require('http').createServer(app);
server.listen(8080, function (err) {
	if (err) {
		return;
	}
	var gun = Gun({	file: 'data', web: server });
	global.Gun = Gun; /// make global to `node --inspect` - debug only
	global.gun = gun; /// make global to `node --inspect` - debug only

	console.log('gun server running');
}); 

