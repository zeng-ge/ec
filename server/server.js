/**
 * Created by Gerry.Zeng on 5/9/2014.
 */
var http = require('http');
var database = require('./database.js');
var userDAO = require('./DAO/userDAO.js');
var onRequest = function( request, response ){
    userDAO.getAllUsers( function( err, items ){
        response.writeHead( 200, {'Content-Type': 'text/html' });
        if( !err ){
            response.write( JSON.stringify( items ), 'binary');
        }else{
            response.writeHead( 200, {'Content-Type': 'text/html' });
            response.write( 'error', 'binary');
        }
        response.end();
    } );
};
var server = http.createServer( onRequest );
database.init( function(){
    server.listen( 8082 );
    console.log(  'server is started, port is 8082' );
});