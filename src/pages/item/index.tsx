import Link from "next/link";
import { Header } from "../../components/header";
import { useItemList } from "../../usecases/Item/useItemList";

export default function Index() {
  const { data, error } = useItemList();

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return <>loading</>;
  }

  return (
    <div>
      <Header />
      <p>Items</p>
      <div>
        <Link href={"/item/new"}>New Item</Link>
      </div>
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
