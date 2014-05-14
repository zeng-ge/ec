/**
 * Created by Gerry.Zeng on 5/12/2014.
 */
var path = require('path');
var database = require('./database.js');
var userDAO = require('./DAO/userDAO.js');
var express = require('express');
var jade = require('jade');
var app = express();

//process.on('uncaughtException', function(err) {
//    console.error( err.stack );
//    res.send( 500, 'Server Error...')
//});

//process error
app.use( function( err, rep, res, next ){
    console.error( err.stack );
    res.send( 500, 'Server Error...')
});

//process static files
app.use( express.static('../view') );

//receive ajax post request
app.post( '/ajax', function( req, res ){
    userDAO.getAllUsers( function( err, items ){
        res.send( items );
    } );
});

app.get('/users', function( req, res ){
    userDAO.getAllUsers( function( err, items ){
        var html = jade.renderFile('../view/templates/users.tpl', { users: items });
        res.send( html );
    } );
});

app.get('/users/user', function( req, res ){
    var param = req.query;
    var id = param['id'];
    userDAO.getUserById( id, function( err, item ){
        res.send( item );
    });
});

database.init( function(){
    app.listen( 8083 );
    console.log(  'app is started, port is 8083' );
});

//app.get('/', function( req, res ){
////    res.sendfile( '../view/index.html' );//Error: Forbidden
//    res.sendfile( path.resolve('../view/index.html') );
//});