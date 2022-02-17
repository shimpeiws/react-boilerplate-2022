import { useItemDetail } from "../../usecases/Item/useItemDetail";
import { ItemDetailContents } from "./ItemDetailContents";

export type ItemDetailProps = {
  id: number;
};

export const ItemDetail = (props: ItemDetailProps) => {
  const { id } = props;
  const { data, error } = useItemDetail({ id });

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return <>loading</>;
  }

  return (
    <>
      <ItemDetailContents item={data} />
    </>
  );
};
