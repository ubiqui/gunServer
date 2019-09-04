var Gun     = require('gun');
require('gun/axe');
var fs = require('fs');
var http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
	return handler(request, response, {
	  "public": "www"
	});
});

server.listen(8080, function (err) {
	if (err) {
		return;
	}
	
	var gun = Gun({	file: 'data', web: sslServer });
	global.Gun = Gun; /// make global to `node --inspect` - debug only
	global.gun = gun; /// make global to `node --inspect` - debug only

	console.log('gun server running');
}); 

