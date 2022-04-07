var zbroj = 0;
function Zbroj(broj)
{
    var nekavrijednost = broj;
    if(broj > 99)
    {
        for(var i = 1; i <= broj.toString().length; i++)
        {
            if(i == 1 || i == broj.toString().length)
            {
                zbroj += nekavrijednost % 10;
            }
            nekavrijednost = Math.floor(nekavrijednost/10);
        }
    }
    else
    {
        zbroj = "Broj mora imat 3 znamenke";
    }
    return zbroj;
}
console.log(Zbroj(123567));