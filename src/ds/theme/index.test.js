import theme from "./theme";

describe("theme", () => {
  it("returns a correct set of values", () => {
    expect(theme).toMatchSnapshot();
  });
});
