/**
 * Created by mdupree on 04/07/17.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var html_dir = 'templates/';


app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + html_dir + 'index.html');
});


io.on('connection', function(socket){
    console.log('a user connected');
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});