var express = require('express');
var mysql = require('mysql');

var app = express();

app.get('/', function(req, res) {
	res.type('text/plain');
	res.send('Cheesesteakjimmys');
});

app.get('/huns', function(req, res) {

	var connection = mysql.createConnection({
		host : 	DBhost,
		port : DBport,
		user : DBuser,
		database : DBdatabase,
		password : DBpassword
	});

	connection.connect(function(err) {
		if (err) {
			console.error('error connecting');
			return;
		}

		console.log('you is beautiful, you is smart. you is important. you is connected.');
	});

	res.type('text/plain');

	var vname = 'kristobal';

	connection.query("INSERT INTO villagers (name) VALUES ('Sup2')");

	res.send('THIS IS THE HUNS PAGE!!!!!!!!!!!! we added ' + vname);

	connection.end();
});

app.listen(process.env.PORT || 6969);
