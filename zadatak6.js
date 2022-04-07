var brojka = require('./slucajanBroj');
var aBrojevi = [];
var brojac1 = 0;
var brojac2 = 0;
for(var i = 0; i<100; i++)
{
    var broj = brojka.dajSlucajanBroj(50,5000);
    aBrojevi.push(broj);
}
aBrojevi.forEach(function(broj)
{
    if(broj%2==0)
    {
        brojac1++;
        console.log("broj parnih iznosi: " + brojac1);
    }
    else
    {
        brojac2++;
        console.log("broj neparnih iznosi: " + brojac2);
    }
});

