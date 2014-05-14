/**
 * Created by Gerry.Zeng on 5/9/2014.
 */
var database = require('../database.js');
var db = database.db;
exports.getAllUsers = function( callback ){
    db.collection('user').find().toArray( function( err, items ){
        if( err ){
            callback( err, items );
        }else{
            callback( null, items );
        }
    });
};
exports.getUserById = function( id, callback ){
    db.collection( 'user').find( { _id: database.ObjectID( id ) }).toArray( function( err, items ){
        callback( err ? err : null, items[ 0 ] );
    });
};