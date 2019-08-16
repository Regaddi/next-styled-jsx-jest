import * as React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";

import "@testing-library/jest-dom/extend-expect";

describe("Button", () => {
  it("renders correctly", () => {
    const { container } = render(<Button size="small">Click me</Button>);
    expect(container).toMatchSnapshot();
  });
});
