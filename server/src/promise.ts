var promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Step 2"), 3000);
});

promise.then(console.log);

console.log("Step 1");
