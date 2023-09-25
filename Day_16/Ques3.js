// The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. It is a shortcut for Promise.prototype.then(undefined, onRejected).

const promise1 = new Promise((resolve, reject) => {
    throw new Error('Uh-oh!');
  });
  
  promise1.catch((error) => {
    console.error(error);
  });