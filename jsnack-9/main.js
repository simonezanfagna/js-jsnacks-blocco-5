var lista = ['casa', 12, 3, 45, 'a', 10, 'b']

function elementiCompresi(array,num_1,num_2) {
  array.splice(0,num_1);
  array.splice(num_2,array.length);
  return array
}
console.log(lista);
console.log(elementiCompresi(lista,1,4));
