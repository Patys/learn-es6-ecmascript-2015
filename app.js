let color = "Czerwony";
let speed = 10;

let car = {
  color,
  speed,
  go() {
    console.log('Brrrumm');
  }
};

console.log(car.color);
console.log(car.speed);
car.go();
