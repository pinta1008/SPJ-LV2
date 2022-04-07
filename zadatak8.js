var slucajanBroj = require('./slucajanBroj')
var aPolje = new Array();
while(aPolje.length < 50)
{
    aPolje.push(slucajanBroj.dajSlucajanBroj(1,20));
}

function uniqueArray(aPolje) {
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
  
    var unique = aPolje.filter( onlyUnique ); // returns ['a', 1, 2, '1']
    return unique;
}
console.log(uniqueArray(aPolje));