import { Item } from "../../../models/Item";

export type ItemDetailContentsProps = {
  item: Item;
};

export const ItemDetailContents = (props: Props): React.ReactHTMLElement => {
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
