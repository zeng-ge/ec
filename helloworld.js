/**
 * Created by Gerry.Zeng on 5/4/2014.
 */
var MongoClient = require('mongodb').MongoClient;
//MongoClient.connect('mongodb://localhost:27017/gerry',function( err, db ){
//    if( !err ){
//        console.log( 'connect successful');
//        db.collection( 'user', function( err,collection ){
//            var cursor = collection.find().sort({name:1});
//            cursor.each( function( err, item ){
//                console.log( item );
//            } );
//        });
//    }
//});

var Server = require( 'mongodb' ).Server;
//var mongoClient = new MongoClient( new Server('localhost', 27017 ) );
//mongoClient.open( function( error, client ){
//    var gerry = client.db('gerry');
//    gerry.collection('user',function(err,user){
//        var cursor = user.find().sort({name:1});
//        cursor.each( function( err, item ){
//            console.log( item );
//        });
//    });
//});

var Db = require('mongodb').Db;
var db = new Db('gerry', new Server( 'localhost', 27017 ), { w: -1 } );
var index = 1;
db.open( function( err, db ){
    db.collection( 'user', function( err, user ){
        var cursor = user.find({},{_id:0}).sort({name:1});
//        cursor.toArray( function( err, items ){
//            console.dir( items );
//        });
        cursor.each( function( err, item ){
            // if the item is null then the cursor is exhausted/empty and closed
            if( item ){
                console.log( item );
            }
        });
    });
});