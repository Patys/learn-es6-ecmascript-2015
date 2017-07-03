let d = new Promise((resolve, reject) => {
  setTimeout(() => {
      if(true) {
      resolve("HI :D");
    } else {
      reject("oops");
    }
  });
}, 2000);

d
  .then((data) =>  {
    console.log(data);
    return "whoop"
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
