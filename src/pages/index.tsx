import { Text } from "../components/text";
import { Header } from "../components/header";
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Header />
      <div data-testid="link-item">
        <Link href="/item">List of Item</Link>
      </div>
      <div data-testid="link-mypage">
        <Link href="/mypage">My Page</Link>
      </div>
      <Text text="bar" />
    </div>
  );
}
