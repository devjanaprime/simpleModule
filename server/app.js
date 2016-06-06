var http=require('http');
var testModule=require('../modules/testModule');

http.createServer( function ( req, res ){
  console.log( 'server received a request');
  res.writeHead( 200 );
  res.write( 'response from res.write' );
  res.write( testModule() );
  res.end();
}).listen(8080);

console.log( 'listening on 8080' );
