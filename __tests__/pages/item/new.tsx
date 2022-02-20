import { render, fireEvent } from "@testing-library/react";
import { setupServer } from "msw/node";
import New from "../../../src/pages/item/new";
import { ComponentWrapper } from "../../util/ComponentWrapper";
import { mockRouter, mockRouter } from "../../util/MockRouter";

const mockServerWithSuccess = setupServer();

describe("Item New", () => {
  beforeAll(() => mockServerWithSuccess.listen());
  afterEach(() => mockServerWithSuccess.resetHandlers());
  afterAll(() => mockServerWithSuccess.close());

  test("POST new item", async () => {
    mockServerWithSuccess.use(
      rest.post("/api/item", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
      })
    );

    const router = mockRouter();

    const { findByTestId } = render(
      <ComponentWrapper>
        <New />
      </ComponentWrapper>
    );

    // Input Form
    const inputNameElement = await findByText("input-name");
    const inputDescriptionElement = await findByText("input-description");
    fireEvent.change(inputNameElement, { target: { value: "foo" } });
    fireEvent.change(inputDescriptionElement, { target: { value: "bar" } });

    // Click Submit Form
    const submitButtonElement = await findByText("input-description");
    fireEvent.change(submitButtonElement, new MouseEvent("click"));

    expect(await findByText("name")).toBeInTheDocument();
  });
});
