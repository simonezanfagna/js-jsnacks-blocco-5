function numeriRandom(min, max) {
  numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
  return numeroRandom;
}

var zucchine = [];

while (zucchine.length < 10) {
  var zucchina = {
    'lunghezza' : numeriRandom(1,30),
    'peso' : numeriRandom(1,100),
  };
  zucchine.push(zucchina);
}
// console.log(zucchine);

var peso_lunghezza_min = 0;
var peso_lunghezza_max = 0;

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza <= 15) {
    peso_lunghezza_min += zucchine[i].peso;
  }
  else {
    peso_lunghezza_max += zucchine[i].peso
  }
}
console.log(peso_lunghezza_max);
console.log(peso_lunghezza_min);
