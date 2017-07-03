function* greet() {
  console.log('Hiii');
  yield "Jeld";
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done);
