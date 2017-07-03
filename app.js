var deliveryBoy = {
  name: "Patryk",

  handleMessage: function(message, handler) {
    handler(message);
  },

  receive: function() {
    this.handleMessage("Hello ", message => console.log(message + this.name));
  }
}

deliveryBoy.receive();
