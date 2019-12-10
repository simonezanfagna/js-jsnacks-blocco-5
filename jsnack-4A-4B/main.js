function numeriRandom(min, max) {
  numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
  return numeroRandom;
}

var squadre = [
  {
    'nome' : 'squadra_1',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra_2',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra_3',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  }
]



for (var i = 0; i < squadre.length; i++) {
  var punti = numeriRandom(0,100);
  var falli = numeriRandom(0,50);
  squadre[i].punti_fatti = punti;
  squadre[i].falli_subiti = falli;
  //console.log(squadre[i]);
}

console.log(squadre)
