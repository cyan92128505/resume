import "jest";
import magicNumbers from "../magic";

describe("Magic Number", () => {
  it("should can be divided by 3", () => {
    let result = magicNumbers(3);
    expect(result).toContain(3);
  });

  it("should can be divided by 7", () => {
    let result = magicNumbers(7);
    expect(result).toContain(3);
  });

  it("should cannot be divided by both 3 and 7", () => {
    let result = magicNumbers(21);
    expect(result).not.toContain(21);
  });
});
