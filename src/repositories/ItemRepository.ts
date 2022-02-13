import { User } from "../models/User";

type ItemListResponseObject = {
  id: number;
  name: string;
};

type ItemDetailResponse = {
  id: number;
  name: string;
  description: string;
};

export const useItemRepository = () => {
  const getItemList = async (): Promise<User[]> => {
    const res = await fetch("/api/item");
    const resData = (await res.json()) as ItemListResponseObject[];
    return resData.map((item) => {
      return {
        id: item.id,
        name: item.name,
      } as User;
    });
  };

  const getItemDetail = async (id: number): Promise<User> => {
    const res = await fetch(`/api/item/${id}`);
    const resData = (await res.json()) as ItemDetailResponse;
    return {
      id: resData.id,
      name: resData.name,
      description: resData.description,
    };
  };
  return {
    getItemList,
    getItemDetail,
  };
};
