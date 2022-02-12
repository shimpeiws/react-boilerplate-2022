import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

type Item = {
  id: number;
  name: string;
  description: string;
};

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR<Item>(`/api/item/${id}`, fetcher);

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return <>loading</>;
  }

  return (
    <div>
      <Link href="/item">BackToIndex</Link>
      <p>Item Detail {id}</p>
      <p>id | {data.id}</p>
      <p>name | {data.name}</p>
      <p>description | {data.description}</p>
    </div>
  );
}
