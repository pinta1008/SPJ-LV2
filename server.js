var http = require('http');
var nPort = 8008;
var sIme = "FranPintaric";
console.log("Pokretanje servera na portu" + nPort);
http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type':'text/plain; charset = utf-8'});
    response.write(sIme);
    response.end();
}).listen(nPort);
