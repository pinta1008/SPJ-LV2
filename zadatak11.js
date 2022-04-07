const json = require("./osobe.json");
var http = require('http');
var nPort = 8000;
console.log("Pokretanje servera na portu " +nPort);
http.createServer(function(request,response)
{
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    json.forEach(element =>{
        if(element.index == null)
        {
            response.write("index: Nema vrijednost");
        }
        else
        {
            response.write("index: "+element.index+" ");
        }
        if(element.age == null)
        {
            response.write("age: Nema vrijednost");
        }
        else
        {
            response.write("age: "+element.age+" ");
        }
        if(element.name == null)
        {
            response.write("name: Nema vrijednost");
        }
        else
        {
            response.write("name: "+element.name+" ");
        }
        if(element.company == null)
        {
            response.write("company: Nema vrijednost");
        }
        else
        {
            response.write("company: "+element.company+" ");
        }
        response.write("\n");
    });
    response.end();

}).listen(nPort);