const addCommas = require("./addCommas");

describe("addCommas function", () => {
  test("should format numbers with commas correctly", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
    expect(addCommas(6)).toBe("6");
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-5678)).toBe("-5,678");
    expect(addCommas(12345.678)).toBe("12,345.678");
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });

  test("should return empty string for non-numeric input", () => {
    expect(addCommas("abc")).toBe("");
    expect(addCommas(true)).toBe("");
    expect(addCommas(null)).toBe("");
    expect(addCommas(undefined)).toBe("");
    expect(addCommas({})).toBe("");
  });
});
