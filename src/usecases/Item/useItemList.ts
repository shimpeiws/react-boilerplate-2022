import { useItemRepository } from "../../repositories/ItemRepository";
import { User } from "../../models/User";
import { generateItemIndexKey } from "./itemCacheKeyGenerator";
import useSWR from "swr";

export const useItemList = () => {
  const itemRepository = useItemRepository();

  return useSWR<User[]>(generateItemIndexKey(), () =>
    itemRepository.getItemList()
  );
};
