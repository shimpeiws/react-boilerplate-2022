import useSWR from "swr";
import { Item } from "../../models/Item";
import { useItemRepository } from "../../repositories/ItemRepository";
import { generateItemIndexKey } from "./itemCacheKeyGenerator";

export const useItemList = () => {
  const itemRepository = useItemRepository();

  return useSWR<Item[]>(generateItemIndexKey(), () =>
    itemRepository.getItemList()
  );
};
