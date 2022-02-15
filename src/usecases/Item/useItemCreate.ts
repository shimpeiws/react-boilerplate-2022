import {
  useItemRepository,
  ItemCreateParameter,
} from "../../repositories/ItemRepository";
import { generateItemIndexKey } from "./itemCacheKeyGenerator";
import { useSWRConfig } from "swr";

export const useItemCreate = () => {
  const { mutate } = useSWRConfig();
  const itemRepository = useItemRepository();

  const createItem = async (params: ItemCreateParameter) => {
    await itemRepository.postItem(params);

    mutate(generateItemIndexKey);
  };

  return {
    createItem,
  };
};
