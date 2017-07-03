function Store() {
  var aisle = {
    fruit: [],
    vegetable: []
  }
  return {
    add: function(category, ...items) {
      // let items = [].splice.call(arguments, 1);
      items.forEach((v) => {
        aisle[category].push(v);
      });
    },
    aisle: aisle
  }
}

let myGroceryStore = new Store();
myGroceryStore.add('fruit', 'orange', 'banana');
console.log(myGroceryStore.aisle);
