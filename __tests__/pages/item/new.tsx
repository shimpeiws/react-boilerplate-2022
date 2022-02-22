import { render, fireEvent, act, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import New from "../../../src/pages/item/new";
import { ComponentWrapper } from "../../util/ComponentWrapper";

const mockServerWithSuccess = setupServer();
const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: mockPush,
    };
  },
}));

describe("Item New", () => {
  beforeAll(() => mockServerWithSuccess.listen());
  afterEach(() => {
    mockServerWithSuccess.resetHandlers();
    jest.clearAllMocks();
  });
  afterAll(() => mockServerWithSuccess.close());

  test("POST new item", async () => {
    mockServerWithSuccess.use(
      rest.post("/api/item/new", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
      })
    );

    const { findByTestId } = render(
      <ComponentWrapper>
        <New />
      </ComponentWrapper>
    );

    await act(async () => {
      // Input Form
      const inputNameElement = await findByTestId("input-name");
      const inputDescriptionElement = await findByTestId("input-description");
      fireEvent.change(inputNameElement, { target: { value: "foo" } });
      fireEvent.change(inputDescriptionElement, { target: { value: "bar" } });

      // Click Submit Form
      const submitButtonElement = await findByTestId("submit-button");
      fireEvent.submit(submitButtonElement);
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/item");
    });
  });

  test("POST new item with API Failer", async () => {
    mockServerWithSuccess.use(
      rest.post("/api/item/new", (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      })
    );

    const { findByTestId, findByText } = render(
      <ComponentWrapper>
        <New />
      </ComponentWrapper>
    );

    await act(async () => {
      // Input Form
      const inputNameElement = await findByTestId("input-name");
      const inputDescriptionElement = await findByTestId("input-description");
      fireEvent.change(inputNameElement, { target: { value: "foo" } });
      fireEvent.change(inputDescriptionElement, { target: { value: "bar" } });

      // Click Submit Form
      const submitButtonElement = await findByTestId("submit-button");
      fireEvent.submit(submitButtonElement);
    });

    await waitFor(async () => {
      expect(mockPush).not.toHaveBeenCalled();
      expect(await findByText("Failed when post item")).toBeInTheDocument();
    });
  });
});
