import Link from "next/link";
import { Header } from "../../components/header";
import { ItemIndex } from "../../components/ItemIndex";

export default function Index() {
  return (
    <div>
      <Header />
      <p>Items</p>
      <div>
        <Link href={"/item/new"}>New Item</Link>
      </div>
      <ItemIndex />
    </div>
  );
}
