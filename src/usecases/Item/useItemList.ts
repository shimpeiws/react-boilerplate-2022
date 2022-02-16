import { useItemRepository } from "../../repositories/ItemRepository";
import { Item } from "../../models/Item";
import { generateItemIndexKey } from "./itemCacheKeyGenerator";
import useSWR from "swr";

export const useItemList = () => {
  const itemRepository = useItemRepository();

  return useSWR<Item[]>(generateItemIndexKey(), () =>
    itemRepository.getItemList()
  );
};
