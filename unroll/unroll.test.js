const unroll = require("./unroll");

describe("#unroll", function () {

  it("traverses small matrix", function () {
    expect(unroll([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ])).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("verifies the array isn't empty", function () {
    expect(unroll([])).toEqual([]);
  });

});
