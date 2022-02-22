import { Item } from "./../../../models/Item";
import { ItemRow } from "./index";

const exportObject = {
  component: ItemRow,
  title: "ItemRow",
};

export default exportObject;

const item: Item = {
  id: 2,
  name: "Item B",
  description: "Description B",
};

export const Default = (args) => <ItemRow {...args} />;
Default.args = {
  item,
};
