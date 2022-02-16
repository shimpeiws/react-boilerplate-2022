import { ItemList } from "./index";
import { Item } from "./../../../models/Item";

const exportObject = {
  component: ItemList,
  title: "ItemList",
};

export default exportObject;

const items: Item[] = [
  {
    id: 1,
    name: "Item A",
    description: "Description A",
  },
  {
    id: 2,
    name: "Item B",
    description: "Description B",
  },
];

export const Default = (args) => <ItemList {...args} />;
Default.args = {
  items,
};
