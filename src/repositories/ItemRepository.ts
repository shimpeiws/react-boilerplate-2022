import { Item } from "../models/Item";

type ItemListResponseObject = {
  id: number;
  name: string;
};

type ItemDetailResponse = {
  id: number;
  name: string;
  description: string;
};

export type ItemCreateParameter = {
  name: string;
  description: string;
};

export const useItemRepository = () => {
  const getItemList = async (): Promise<Item[]> => {
    const res = await fetch("/api/item");
    const resData = (await res.json()) as ItemListResponseObject[];
    return resData.map((item) => {
      return {
        id: item.id,
        name: item.name,
      } as Item;
    });
  };

  const getItemDetail = async (id: number): Promise<Item> => {
    const res = await fetch(`/api/item/${id}`);
    const resData = (await res.json()) as ItemDetailResponse;
    return {
      id: resData.id,
      name: resData.name,
      description: resData.description,
    };
  };

  const postItem = async (params: ItemCreateParameter): Promise<void> => {
    await fetch("/api/item/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  };
  return {
    getItemList,
    getItemDetail,
    postItem,
  };
};
