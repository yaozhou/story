var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('util') ;


//create database story;
//create table story (id INT auto_increment, title varchar(1024), time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, primary key(id)) DEFAULT CHARSET=utf8;
//create table message (id INT auto_increment, content varchar(102400), story_id INT, time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, primary key(id)) DEFAULT CHARSET=utf8;

var mysql = require('mysql');

function query(sql, fun) {
	console.log("sql:" + sql) ;
	var conn = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'yao',
	    database:'story',
	    port: 3306
	});

	conn.connect();   
	conn.query(sql, fun) ;
	conn.end() ;
}

query("SET character_set_client=utf8,character_set_connection=utf8") ;

app.use(express.static('static'));

app.use(bodyParser.json('1mb'));  //body-parser ½âÎöjson¸ñÊ½Êý¾Ý
app.use(bodyParser.urlencoded({            //´ËÏî±ØÐëÔÚ bodyParser.json ÏÂÃæ,Îª²ÎÊý±àÂë
  extended: true
}));

app.post('/api/msg_add', function(req, res) {
	var sql = "INSERT INTO message (content, story_id) VALUES ('" + 
			req.body.content + "', " + req.body.id + ") ;" ;
	query(sql, function(err, rows, fields) {
		if (err) throw err ;
		var ret = { "code" : 0, "msg_id" : rows.insertId } ;
		res.send(JSON.stringify(ret)) ;
	})
}) ;


app.post('/api/story_add', function(req, res) {
	var sql = "INSERT INTO story (title) VALUES ('" + req.body.title + "');" ;
	query(sql, function(err, rows, fields) {
		if (err) throw err ;
		res.send(JSON.stringify({"code":0, "id":rows.insertId})) ;
	})
}) ;


app.post('/api/story_info', function(req, res) {
	var sql = "select * from story where id = '" + req.body.id + "';" ;	
	query(sql, function(err, rows, fields) {
		if (err) throw err ;

		var sql2 = "select * from message where story_id = '" + req.body.id + "';" ;
		query(sql2, function(err2, rows2, fields2) {
			if (err2) throw err2 ;

			var ret = { "story_info" : rows, "messages" : rows2} ;
			res.send(JSON.stringify(ret)) ;
		})
	})
}) ;











app.post('/api/item_list', function (req, res) {
	query('SELECT * from t_item', function(err, rows, fields) {
    	if (err) throw err;
    	
	    var str = JSON.stringify(rows) ;
	    res.send(str) ;
	}) ;
});


app.post('/api/item_add', function(req, res) {
	var sql = util.format('INSERT INTO t_item(item, category) VALUES ("%s",%d);',
				req.body.item, req.body.category) ;
	console.log("add message(" + sql + ")") 

	query(sql, function(err, rows, fields) {
		if (err) throw err ;
		// console.log(JSON.stringify(rows)) ;
		res.send(JSON.stringify({"code":0, "item_id":rows.insertId, "category_id": req.body.category})) ;
	})
}) ;

app.post('/api/item_del', function(req, res) {
	var sql = "DELETE FROM t_item where id = " + req.body.id + ";" ;
	console.log("del message(" + sql + ")") ;

	query(sql, function(err, rows, fields) {
		if (err) throw err ;
		res.send(JSON.stringify({"code":0, "id":req.body.id})) ;
	})
})





app.post('/api/category_del', function(req, res) {
	var sql = "DELETE FROM t_category where id = " + req.body.id + ";" ;
	query(sql, function(err, rows, fields) {
		if (err) throw err ;
		res.send(JSON.stringify({"code" : 0, "id":req.body.id})) ;
	})
}) ;

app.post('/api/category_list', function(req, res) {
	var sql = "select * from t_category" ; 
	query(sql, function(err, rows, fields) {
		if (err) throw err ;
		res.send(JSON.stringify(rows)) ;
	})
}) ;

app.post('/api/table_query', function(req, res) {
	var sql = "select * from " + req.body.name + " ;" ;
	query(sql, function(err, rows, fields) {
		if (err) throw err ;
		res.send(JSON.stringify(rows)) ;
	}) ;
}) ;

var server = app.listen(3002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
