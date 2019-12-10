var stringa = prompt('Inserisci una parola:');

// METODO 1
console.log(stringa.split("").reverse().join(""));


// METODO 2
var lista_lettere = [];
for (var i in stringa) {
  lista_lettere.push(stringa[i]);
}

lista_lettere.reverse()
var parola = lista_lettere.join("")
console.log(parola);
