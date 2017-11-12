var fs = require('fs');
var colors = require('colors');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('readDirectory', (files) => { // '(files) =>'  == 'function(files)'

		fs.writeFile('Catalogue data.txt', files, function(err) {

		if (err) throw err;
	});
});



fs.readdir('./', 'utf-8', (err, files) => {

	if(err) throw err;
	console.log('The contents of this directory are about to be written to "Catalogue data.txt": \n'.cyan + files);
	emitter.emit('readDirectory', files);
});






