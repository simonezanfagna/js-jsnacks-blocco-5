var triangolo = {
  'base' : 5,
  'altezza' : 10
}

var ipotenusa = Math.sqrt(triangolo.base ** 2 + triangolo.altezza ** 2);
console.log(ipotenusa);

var area = (triangolo.base * triangolo.altezza)/2;
console.log(area);

var perimetro = ipotenusa + triangolo.base + triangolo.altezza;
console.log(perimetro);
