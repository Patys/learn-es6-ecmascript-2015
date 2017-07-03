function receive(complete = () => console.log('gotowe')) {
  complete();
}

receive();
