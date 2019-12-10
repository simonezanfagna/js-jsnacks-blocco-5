var bici = [
  {
    "nome" : "bici_1",
    "peso" : 10
  },
  {
    "nome" : "bici_2",
    "peso" : 5
  },
  {
    "nome" : "bici_3",
    "peso" : 20
  },
  {
    "nome" : "bici_4",
    "peso" : 3
  },
  {
    "nome" : "bici_5",
    "peso" : 2
  }
];

var pesi = [];

for (var i = 0; i < bici.length; i++) {
  var peso = bici[i].peso;
  pesi.push(peso);

}

pesi.sort(function (a,b) {
  return a - b
})

// console.log(pesi);
//
// console.log(pesi[0]);


var peso_minore = pesi[0];
for (var i = 0; i < bici.length; i++) {
  if (bici[i].peso == peso_minore) {
    var nome_bici_peso_minore = bici[i].nome;
    console.log(nome_bici_peso_minore);
  }
}
