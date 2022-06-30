let options = {
  name: "Tom",
  age: 34,
  sex: "male",
  phone: 23939889,
};

var destructuring = function (options: any) {
  let { name, age } = options;

  return {
    name,
    age,
  };
};

console.log(destructuring(options));
