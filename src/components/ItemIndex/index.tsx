import { useItemList } from "../../usecases/Item/useItemList";
import { ItemList } from "./ItemList";

export const ItemIndex = (): ReactElement => {
  const { data, error } = useItemList();

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return <>loading</>;
  }

  return (
    <>
      <ItemList items={data} />
    </>
  );
};
