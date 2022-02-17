import { useRouter } from "next/router";
import Link from "next/link";
import { Header } from "../../components/header";
import { ItemDetail } from "../../components/ItemDetail";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <Link href="/item">BackToIndex</Link>
      <ItemDetail id={id} />
    </div>
  );
}
