var magicNumbers = (n: number) => {
  let arrOfString = [];
  for (let i = 1; i <= n; i++) {
    if ((i % 7 === 0 || i % 3 === 0) && i % 21 !== 0) {
      arrOfString.push(i);
    }
  }
  return arrOfString;
};

export default magicNumbers;

// var main = () => {
//   console.log(magicNumbers(100000));
// };

// main();
