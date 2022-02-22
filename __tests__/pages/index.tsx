import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Index from "../../src/pages";

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
