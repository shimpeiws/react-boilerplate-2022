import useSWR from "swr";

type Item = {
  id: number;
  name: string;
};

export default function Index() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR<Item[]>("/api/item", fetcher);

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return <>loading</>;
  }

  return (
    <div>
      <p>Items</p>
      {data.map((item) => {
        return (
          <p key={item.id}>
            {item.id} | {item.name}
          </p>
        );
      })}
    </div>
  );
}
