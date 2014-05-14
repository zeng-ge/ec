/**
 * Created by Gerry.Zeng on 5/9/2014.
 */
var mongo = require('mongodb');
var ObjectID = require('mongodb').ObjectID
//var MongoClient = mongo.MongoClient;
var Server = mongo.Server;
var Db = mongo.Db;
var db = new Db( 'gerry', new Server( 'localhost', 27017 ), {
    w: -1,
    logger: {
        doDebug:true,
        error:function(message, object) {
            console.log( '[error] ' + message );
        },
        log:function(message, object) {
            console.log( '[log] ' +  message );
        },
        debug:function(message, object) {
            console.log( '[debug] ' +  message );
        }
    }
});
var initDB = function( callback ){
    db.open( function( err, db ){
        callback( err, db );
    });
};
var close = function(){
    db.close();
};
exports.db = db;
exports.ObjectID = ObjectID;
exports.init = initDB;
exports.close = close;