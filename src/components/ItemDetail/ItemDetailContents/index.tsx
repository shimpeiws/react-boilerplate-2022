import { ReactElement } from "react";
import { Item } from "../../../models/Item";

export type ItemDetailContentsProps = {
  item: Item;
};

export const ItemDetailContents = (
  props: ItemDetailContentsProps
): ReactElement => {
  const { item } = props;
  return (
    <>
      <p>Item Detail {item.id}</p>
      <p>id | {item.id}</p>
      <p>name | {item.name}</p>
      <p>description | {item.description}</p>
    </>
  );
};
