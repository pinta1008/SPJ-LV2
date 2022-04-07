var slucajanBroj = require('./slucajanBroj');
var aBrojevi = new Array();
while(aBrojevi.length < 20)
{
    aBrojevi.push(slucajanBroj.dajSlucajanBroj(10,200));
}

function SortiranjeNajveci(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i ++) {
        if (array[i - 1] < array[i]) {
          done = false;
          var tmp = array[i - 1];  
          array[i - 1] = array[i]; 
          array[i] = tmp;           
        }
      }
    }
    return array;
  }

  function SortiranjeNajmanji(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i ++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];  
          array[i - 1] = array[i];  
          array[i] = tmp;          
        }
      }
    }
    return array;
  }

  SortiranjeNajveci(aBrojevi);
  console.log(aBrojevi);
  SortiranjeNajmanji(aBrojevi);
  console.log(aBrojevi);