function checkTime(strings, ...values) {
  if(values[0] < 22) {
    values[1] = "awake";
  } else {
    values[1] = "sleepy";
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

let message = checkTime`It's ${new Date().getHours()} and I'm ${""}`;

console.log(message);
