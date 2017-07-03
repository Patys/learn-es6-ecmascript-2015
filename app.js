function checkTime(strings, ...values) {
  console.log(strings);
  console.log(values);
}

let message = checkTime`It's ${new Date().getHours()} and I'm sleepy`;

console.log(message);
