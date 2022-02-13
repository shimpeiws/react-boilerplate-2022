import { Text } from "../components/text";
import { Header } from "../components/header";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Header />
      <div>
        <Link href="/item">List of Item</Link>
      </div>
      <div>
        <Link href="/mypage">My Page</Link>
      </div>
      <Text text="bar" />
    </div>
  );
}
