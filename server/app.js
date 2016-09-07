var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

// spin up server
app.listen( '3000', 'localhost', function(){
  console.log( 'server is listening on port 3000');
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  // send index file from resolved path
  res.sendFile( path.resolve( 'public/index.html') );
}); // end base url

// post URL for AJAX call
// requires bodyParser's urlencodedparser
app.post( '/texter', urlencodedParser, function( req, res ){
  console.log( 'texter hit', req.body );
  res.send( 'you sent a ' + req.body.creature );
});

// use 'public' as a static resource
app.use( express.static( 'public' ) );
