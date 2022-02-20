export const mockRouter = () => {
  return jest.mock("next/router", () => ({
    useRouter() {
      return {
        asPath: "",
      };
    },
  }));
};
