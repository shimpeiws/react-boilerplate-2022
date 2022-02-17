import { ReactElement } from "react";
import Link from "next/link";
import { Item } from "../../../models/Item";

export type ItemRowProps = {
  item: Item;
};

export const ItemRow = (props: ItemRowProps): ReactElement => {
  const { item } = props;

  return (
    <Link key={item.id} href={`/item/${item.id}`} passHref>
      <p key={item.id}>
        {item.id} | {item.name}
      </p>
    </Link>
  );
};
