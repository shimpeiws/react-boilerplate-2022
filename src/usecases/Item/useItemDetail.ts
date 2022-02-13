import { useItemRepository } from "../../repositories/ItemRepository";
import { User } from "../../models/User";
import { generateItemDetailKey } from "./itemCacheKeyGenerator";
import useSWR from "swr";

type ItemDetailQuery = {
  id: number;
};

export const useItemDetail = (query: ItemDetailQuery) => {
  const itemRepository = useItemRepository();

  return useSWR<User[]>(generateItemDetailKey(query.id), () =>
    itemRepository.getItemDetail(query.id)
  );
};
