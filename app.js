let color = "Czerwony";
let speed = 10;
function go() {
  console.log('Brrrumm');
}
let car = {color, speed, go};

console.log(car.color);
console.log(car.speed);
car.go();
