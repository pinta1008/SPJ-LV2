var brojka = require('./slucajanBroj');

var aBrojevi = [];
for(var i = 0; i < 200; i++)
{
    var broj = brojka.dajSlucajanBroj(150,1500);
    aBrojevi.push(broj);
}
var najveca = 1501;
var najmanja = 149;
aBrojevi.forEach(function(broj)
{
    if(broj<najveca)
    {
        najveca = broj;
    }
    
});
aBrojevi.forEach(function(broj)
{
    if(broj>najmanja)
    {
        najmanja = broj;
    }
    
});
console.log(najveca);
console.log(najmanja);