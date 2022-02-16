import { ItemRow } from "./index";
import { Item } from "./../../../models/Item";

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
