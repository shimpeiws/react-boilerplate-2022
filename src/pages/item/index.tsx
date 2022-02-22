import Link from "next/link";
import { ItemIndex } from "../../components/ItemIndex";
import { Header } from "../../components/header";

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
