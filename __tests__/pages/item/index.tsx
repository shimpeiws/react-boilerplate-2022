import { render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import React from "react";
import Index from "../../../src/pages/item";
import { ComponentWrapper } from "../../util/ComponentWrapper";

const mockServerWithSuccess = setupServer();

describe("Item Index", () => {
  beforeAll(() => mockServerWithSuccess.listen());
  afterEach(() => mockServerWithSuccess.resetHandlers());
  afterAll(() => mockServerWithSuccess.close());

  test("show index", async () => {
    mockServerWithSuccess.use(
      rest.get("/api/item", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            { id: 1, name: "Test Foo", description: "Test Foo Description" },
            { id: 2, name: "Test Bar", description: "Test Bar Description" },
          ])
        );
      })
    );

    const { findByText } = render(
      <ComponentWrapper>
        <Index />
      </ComponentWrapper>
    );
    expect(await findByText("1 | Test Foo")).toBeInTheDocument();
    expect(await findByText("2 | Test Bar")).toBeInTheDocument();
  });

  test("show error", async () => {
    mockServerWithSuccess.use(
      rest.get("/api/item", (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      })
    );
    const { findByText } = render(
      <ComponentWrapper>
        <Index />
      </ComponentWrapper>
    );
    expect(await findByText("error")).toBeInTheDocument();
  });
});
