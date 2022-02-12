import useSWR from "swr";
import Link from "next/link";
import { useUserState } from "../../globalStates/user";

type Item = {
  id: number;
  name: string;
};

export default function Index() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR<Item[]>("/api/item", fetcher);
  const userState = useUserState();

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return <>loading</>;
  }

  return (
    <div>
      <p>Items</p>
      {userState.user && <p>{userState.user.name}</p>}
      {data.map((item) => {
        return (
          <Link key={item.id} href={`/item/${item.id}`} passHref>
            <p key={item.id}>
              {item.id} | {item.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
