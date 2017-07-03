var createGreeting = function(message, name) {
  return message + name;
}

var arrowGreeting = (message, name) => message + name;

console.log(arrowGreeting('Hello ', 'Patryk'));
