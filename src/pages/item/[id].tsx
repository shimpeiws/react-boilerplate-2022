import Link from "next/link";
import { useRouter } from "next/router";
import { ItemDetail } from "../../components/ItemDetail";
import { Header } from "../../components/header";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <Link href="/item">BackToIndex</Link>
      <ItemDetail id={id as unknown as number} />
    </div>
  );
}
