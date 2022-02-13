import { useRouter } from "next/router";
import Link from "next/link";
import { Header } from "../../components/header";
import { useItemDetail } from "../../usecases/Item/useItemDetail";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useItemDetail({ id });

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return <>loading</>;
  }

  return (
    <div>
      <Header />
      <Link href="/item">BackToIndex</Link>
      <p>Item Detail {id}</p>
      <p>id | {data.id}</p>
      <p>name | {data.name}</p>
      <p>description | {data.description}</p>
    </div>
  );
}
