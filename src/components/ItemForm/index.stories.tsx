import { ItemForm } from "./index";

const exportObject = {
  component: ItemForm,
  title: "ItemForm",
};

export default exportObject;

export const Default = (args) => <ItemForm {...args} />;
Default.args = {};
