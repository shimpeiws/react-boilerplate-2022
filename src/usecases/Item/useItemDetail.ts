import useSWR from "swr";
import { Item } from "../../models/Item";
import { useItemRepository } from "../../repositories/ItemRepository";
import { generateItemDetailKey } from "./itemCacheKeyGenerator";

type ItemDetailQuery = {
  id: number;
};

export const useItemDetail = (query: ItemDetailQuery) => {
  const itemRepository = useItemRepository();

  return useSWR<Item>(generateItemDetailKey(query.id), () =>
    itemRepository.getItemDetail(query.id)
  );
};
