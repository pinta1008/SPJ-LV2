var aPolje = [];
var aParniBrojevi=[];
for(var i = 0; i <=50; i++)
{
    if(i%7==0)
    {
        aPolje.push(i);
    }
    
}
aPolje.forEach(function(broj)
    {
        if(broj%2==0)
        {
            aParniBrojevi.push(broj);
        }
    })
    aParniBrojevi.forEach(function(broj)
    {
        console.log(broj);
    });