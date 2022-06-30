import "jest";
import validParentheses from "../validParentheses";

describe("Valid Parentheses", () => {
  it("should '{}([])' can be Valid", () => {
    let result = validParentheses("{}([])");
    expect(result).toBe(true);
  });

  it("should '{[]({})}' can be Valid", () => {
    let result = validParentheses("{[]({})}");
    expect(result).toBe(true);
  });

  it("should '(]' can be Invalid", () => {
    let result = validParentheses("(]");
    expect(result).toBe(false);
  });
});
