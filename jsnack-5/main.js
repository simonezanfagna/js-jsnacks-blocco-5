var zucchine = [
  {
    'varietà' : 'qwerty',
    'peso' : 5,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 4,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 2,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 8,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 1,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 9,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 10,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 3,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 6,
    'lunghezza': 7
  },
  {
    'varietà' : 'qwerty',
    'peso' : 2,
    'lunghezza': 7
  },
]

var peso_tot = 0;
for (var i = 0; i < zucchine.length; i++) {
  peso_tot += zucchine[i].peso;
}

console.log(peso_tot);
