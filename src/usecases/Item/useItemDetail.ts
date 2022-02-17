import { useItemRepository } from "../../repositories/ItemRepository";
import { Item } from "../../models/Item";
import { generateItemDetailKey } from "./itemCacheKeyGenerator";
import useSWR from "swr";

type ItemDetailQuery = {
  id: number;
};

export const useItemDetail = (query: ItemDetailQuery) => {
  const itemRepository = useItemRepository();

  return useSWR<Item>(generateItemDetailKey(query.id), () =>
    itemRepository.getItemDetail(query.id)
  );
};
