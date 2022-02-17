import { Text } from "./index";

const exportObject = {
  component: Text,
  title: "Text",
};

export default exportObject;

export const Default = (args) => <Text {...args} />;
Default.args = {
  text: "Hello",
};
