import { ReactElement } from "react";
import { ItemRow } from "../ItemRow";
import { Item } from "../../../models/Item";

export type ItemListProps = {
  items: Item[];
};

export const ItemList = (props: ItemListProps): ReactElement => {
  const { items } = props;

  return (
    <>
      {items.map((item) => {
        return <ItemRow key={item.id} item={item} />;
      })}
    </>
  );
};
