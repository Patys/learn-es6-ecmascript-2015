let myMap = new Map();

myMap.set('foo', 'bar');
myMap.set('Hello', 'World');

console.log(myMap.get('foo'));
console.log(myMap.get('qwerty'));
console.log(myMap.size);
console.log(myMap.has('Hello'));
console.log(myMap.has('hello'));


for(let key of myMap.keys()) {
  console.log(key);
}

for(let value of myMap.values()) {
  console.log(value);
}

for(let [key, value] of myMap.entries()) {
  console.log(key + " " + value);
}
