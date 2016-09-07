var express = require( 'express' );
var app = express();
var path = require( 'path' );
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

// setup public folder
app.use( express.static( 'public' ) );
