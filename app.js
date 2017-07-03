function generateObject() {
  return {
    color: "red",
    name: "Patryk",
    place: "Poland"
  }
}

let {color, name: firstName} = generateObject();

console.log(color);
console.log(firstName);
