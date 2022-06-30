var validParentheses = (targetString: string) => {
  if (targetString.length <= 1 || targetString.length > 10000) {
    return false;
  }

  let stack = [];
  let _dict = new Map<string, string>();
  _dict.set("}", "{");
  _dict.set(")", "(");
  _dict.set("]", "[");

  for (let char of targetString) {
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else {
      if (stack.pop() !== _dict.get(char)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default validParentheses;

// var main = () => {
//   ["{}([])", "{[]({})}", "(]"].map((key) =>
//     console.log(`${key} => ${validParentheses(key)}`)
//   );
// };

// main();
