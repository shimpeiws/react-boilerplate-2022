import React from "react";
import { render } from "@testing-library/react";
import Index from "../../src/pages";
import { RecoilRoot } from "recoil";

test("show index", () => {
  const { getByTestId } = render(
    <RecoilRoot>
      <Index />
    </RecoilRoot>
  );
  expect(getByTestId("link-item")).toContainHTML(
    '<a href="/item">List of Item</a>'
  );
});
