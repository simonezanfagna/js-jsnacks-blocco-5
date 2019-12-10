var numeri = [1, 2, 3, 4, 5];
var lettere = ['a', 'b', 'c', 'd', 'e'];

function fondereArray(lista_1,lista_2) {
  var x = 0;
  for (var i = 0; i < lista_2.length; i++) {
    lista_1.splice(x++, 0, lista_2[i]);
    x++
  }
  return lista_1
}

console.log(fondereArray(numeri,lettere))
