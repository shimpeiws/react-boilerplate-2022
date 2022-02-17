import { roleName, UserRole } from "../src/models/User";

test("basic", () => {
  expect(roleName(UserRole.ADMIN)).toBe("Admin User");
});
