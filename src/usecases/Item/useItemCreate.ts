import React from "react";
import { useSWRConfig } from "swr";
import {
  useItemRepository,
  ItemCreateParameter,
} from "../../repositories/ItemRepository";
import { generateItemIndexKey } from "./itemCacheKeyGenerator";

export const useItemCreate = () => {
  const { mutate } = useSWRConfig();
  const itemRepository = useItemRepository();
  const [errors, setErrors] = React.useState<string[]>([]);

  const createItem = async (params: ItemCreateParameter) => {
    try {
      await itemRepository.postItem(params);
    } catch (error) {
      console.info("error", error);
      setErrors([...errors, "Failed when post item"]);
      return;
    }

    mutate(generateItemIndexKey);
  };

  return {
    createItem,
    errors,
  };
};
