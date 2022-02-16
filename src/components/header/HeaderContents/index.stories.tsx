import { HeaderContents } from "./index";
import { User, UserRole } from "./../../../models/User";

const exportObject = {
  component: HeaderContents,
  title: "HeaderContents",
};

export default exportObject;

const mockUser: User = {
  id: 1234,
  name: "Mock User",
  role: UserRole.ADMIN,
};

export const Default = (args) => <HeaderContents {...args} />;
Default.args = {
  user: mockUser,
};
