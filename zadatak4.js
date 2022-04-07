var brojac = 1;
var sum = 0;
var i = 0;
while(brojac < 100)
{
    if(i % 2 != 0)
    {
        sum +=i;
        brojac++;
    }
    i++;
}
console.log(sum);